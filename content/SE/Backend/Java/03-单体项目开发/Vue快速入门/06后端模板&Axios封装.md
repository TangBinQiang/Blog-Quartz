### 管理后台模板

安装element-plus

>npm install element-plus --save

main.js导入element-plus
```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import Header from '@/components/t4/Header.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);

// 注入全局组件
app.component('Header',Header);

app.use(router);

app.use(ElementPlus)

app.mount('#app')
```

Index.vue

```vue
<template>
    <el-container>
        <Aside :isCollapse="isCollapse"></Aside>
        <el-container direction="vertical" style="height: 100vh;">
            <Header @isCollapse="getIsCollapse"></Header>
            <el-main>
                <h1>首页</h1>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
    import Aside from '@/components/Aside.vue';
    import Header from '@/components/Header.vue';
    import {ref} from 'vue';

    let isCollapse = ref();

    const getIsCollapse = (data) => {
        isCollapse.value = data;
    }


</script>

<style scoped>
    .el-main {
        background-color: rgb(242, 242, 242);
    }
</style>
```

Header.vue
```vue
<template>
    <el-header fixed>
        <el-row>
            <el-col :span="4" class="menu-icon">
                <el-icon @click="changeMenu" v-if="isCollapse"><Fold /></el-icon>
                <el-icon  @click="changeMenu" v-else><Expand /></el-icon>
            </el-col>
            <el-col :span="14"></el-col>
            <el-col :span="6" class="login-system">
                <el-dropdown>
                    <div>
                        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
                        <span>张三</span>
                    </div>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>Action 1</el-dropdown-item>
                            <el-dropdown-item>Action 2</el-dropdown-item>
                            <el-dropdown-item>Action 3</el-dropdown-item>
                            <el-dropdown-item>Action 4</el-dropdown-item>
                            <el-dropdown-item>Action 5</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-col>
        </el-row>
    </el-header>
</template>

<script setup>

    import {Expand,Fold} from '@element-plus/icons-vue'
    import {ref} from 'vue';

    const emit = defineEmits(['isCollapse']);

    let isCollapse = ref(true);

    const changeMenu = ()=> {
        if(isCollapse.value){
            isCollapse.value = false;
            emit('isCollapse',true);
        }else {
            isCollapse.value = true;
            emit('isCollapse',false);
        }
    }

</script>

<style scoped>
    .el-header {
        background-color: blueviolet;
        height: 60px;
        padding: 10px;
    }
    .menu-icon {
        height: 40px;
        line-height: 45px;
        color: white;
        font-size: 28px;
    }
    .menu-icon i {
        cursor: pointer;
    }
    .login-system {
        text-align: right;
        padding-right: 20px;
    }
    .login-system span{
        vertical-align: middle;
        margin-left: 10px;
        color: white;
    }
</style>
```

Aside.vue

```vue
<template>
    <el-aside width="200">
        <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
            @close="handleClose">
            <div id="logo">
                LOGO
            </div>
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>Navigator One</span>
                </template>
                <el-menu-item-group>
                    <template #title><span>Group One</span></template>
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title><span>item four</span></template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <template #title>Navigator Two</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <el-icon>
                    <document />
                </el-icon>
                <template #title>Navigator Three</template>
            </el-menu-item>
            <el-menu-item index="4">
                <el-icon>
                    <setting />
                </el-icon>
                <template #title>Navigator Four</template>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script setup>
    import { ref } from 'vue'
    import {
        Document,
        Menu as IconMenu,
        Location,
        Setting,
    } from '@element-plus/icons-vue';

    //获取父组件发送过来的值
    const props = defineProps(['isCollapse']);

    const handleOpen = (key, keyPath) => {
        console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
        console.log(key, keyPath)
    }
</script>

<style scoped>
.el-aside {
    background-color: antiquewhite;
    height: 100vh;
}
.el-menu {
    height: 100vh;
}
#logo {
    height: 60px;
    text-align: center;
    line-height: 60px;
}
</style>
```

### Axios封装

request.js
```js
import axios from 'axios'

// 创建新的axios实例
const service = axios.create({
    // 环境变量
    baseURL: 'http://116.62.118.175/api',
    //跨域时携带cookie
    //withCredentials: true,
    // 超时时间暂定5s
    timeout: 5000,
})

//请求拦截
service.interceptors.request.use(
    config => {
        // 此处添加Loading
        
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

//响应拦截
service.interceptors.response.use(
    response => {

        return response;
    },
    error => {

        return Promise.resolve(error.response);
    }
)

const get = (url,params) => {
    return new Promise((resolve, reject) => {
        service.get(url,{
            params: params
        }).then(response => {
            if(response && response.data){
                resolve(response.data);
            }
        }).catch(error =>{
            reject(error);
        })
    });
}

const postJson = (url,data) => {
    return new Promise((resolve, reject) => {
        service.post(url,data).then(response => {
            if(response && response.data){
                resolve(response.data);
            }
        }).catch(error =>{
            reject(error);
        })
    });
}

const postForm = (url,params) => {
    return new Promise((resolve, reject) => {
        service.post(url,params,{
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(response => {
            if(response && response.data){
                resolve(response.data);
            }
        }).catch(error =>{
            reject(error);
        })
    });
}


export default {get,postForm,postJson};
```

index.js

```js

import http from './request';

export function getJobList(params) {
    return http.get('/job/list',params);
}

export function delJob(params){
    return http.postForm('/job/del',params);
}

export function modJob(params){
    return http.postForm('/job/update',params);
}
```


