# 依赖库：pandas（处理Excel和数据聚合），需先安装
# 安装命令：pip install pandas openpyxl xlrd

import pandas as pd

from openpyxl import load_workbook
from openpyxl.styles import numbers

def aggregate_supplier_by_inventory():
    # 1. 读取Excel文件（使用备份的.xlsx文件）
    file_path = 'C:/Users/Administrator/Desktop/新建文件夹/基础数据/采购订单列表.xls'


    try:
        # 方案1：读取Excel时强制所有列为文本（优先适配真实.xlsx）
        try:
            # dtype=str 强制所有列以文本读取，彻底保留前导零
            df = pd.read_excel(file_path, header=0, engine='xlrd', dtype=str)
        except:
            # 方案2：读取HTML表格（适配伪Excel文件），读取后转文本
            df_list = pd.read_html(file_path, encoding='gbk')
            df = df_list[0].astype(str)  # 转文本格式保留前导零
        print(f"成功读取文件，共{len(df)}条采购订单数据")
        print(f"表格列名：{list(df.columns)}")
    except Exception as e:
        print(f"读取文件失败：{str(e)}")
        return



    # 2. 确认关键列存在（根据Excel实际列名调整）
    inventory_col = "存货编码"  # 存货编码列名
    supplier_col = "供应商编码"  # 供应商编码列名
    
    if inventory_col not in df.columns or supplier_col not in df.columns:
        print(f"Excel中缺少关键列！请确认列名是否为：{inventory_col}、{supplier_col}")
        print(f"你的Excel实际列名：{list(df.columns)}")
        return

    # 3. 按存货编码聚合供应商编码（仅去重+逗号拼接，不修改原始格式）
    # 核心调整：去掉sorted排序、保留原始数据类型（仅过滤空值）
    def concat_supplier(series):
        # 过滤空值 → 去重 → 保留原始格式拼接
        non_null_vals = [val for val in series if pd.notna(val)]
        unique_vals = list(dict.fromkeys(non_null_vals))  # 去重且保留原始顺序
        return ','.join([str(val) for val in unique_vals])  # 仅统一转字符串用于拼接，不修改内容
    
    aggregated_df = df.groupby(inventory_col, as_index=False).agg(
        {supplier_col: concat_supplier}
    )

    # 4. 重命名列（保持清晰，不修改数据）
    aggregated_df.columns = [inventory_col, "关联供应商编码（多供应商用逗号分隔）"]

    # 5. 保存结果到新Excel文件（保留原始格式）
    output_path = 'C:/Users/Administrator/Desktop/新建文件夹/基础数据/存货编码-供应商编码聚合结果.xlsx'
    aggregated_df.to_excel(output_path, index=False, engine='openpyxl')

    # 第二步：加载文件，设置所有单元格为文本格式
    wb = load_workbook(output_path)
    ws = wb.active  # 获取活跃工作表
    
    # 遍历所有单元格，设置为文本格式
    for row in ws.iter_rows():
        for cell in row:
            # 设置单元格格式为纯文本（关键：避免Excel自动转换格式）
            cell.number_format = numbers.FORMAT_TEXT
    
    # 保存修改后的文件
    wb.save(output_path)
    wb.close()

    print(f"\n聚合完成！结果已保存到：{output_path}")
    print(f"\n聚合结果预览（前10条）：")
    print(aggregated_df.head(10))

# 执行函数
if __name__ == "__main__":
    aggregate_supplier_by_inventory()