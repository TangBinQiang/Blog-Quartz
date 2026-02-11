/// Reference: https://github.com/jackyzha0/quartz/pull/2074
import { QuartzTransformerPlugin } from "../types"

// ViewImage.js
export const ViewImage: QuartzTransformerPlugin = () => {
  return {
    name: "ViewImage",
    externalResources() {
      return {
        js: [
          {
            src: "https://cdn.jsdelivr.net/gh/Tokinx/ViewImage/view-image.min.js",
            loadTime: "afterDOMReady",
            contentType: "external",
          },
          {
            script: `
              document.addEventListener('DOMContentLoaded', function() {
                if (window.ViewImage) {
                  const selector = 'article img:not([src*="banner.svg"]):not([src*="NKN(NKN).svg"]), .content img:not([src*="banner.svg"]):not([src*="NKN(NKN).svg"])';
                  ViewImage.init(selector);
                  const style = document.createElement('style');
                  style.textContent = selector + ' { cursor: zoom-in; }';
                  document.head.appendChild(style);
                }
              });
            `,
            loadTime: "afterDOMReady",
            contentType: "inline",
          },
        ],
      }
    },
  }
}

// 告诉TypeScript我们添加的内容
declare module "vfile" {
  interface DataMap {
    viewImage?: boolean
  }
}
