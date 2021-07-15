module.exports = {
  configureWebpack: {
    devServer: {
      //设置代理 跨域配置
      proxy: {
        '/netease-api': {
          // 请求的地址
          target: 'http://localhost:3000',
          // 路径重写规则
          pathRewrite: { '^/netease-api': '' },
          // 是否跨域
          changeOrigin: true,
          secure: false,
        },
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "~@/style/variables.scss";
        @import "~@/style/_mixin.scss";
        `,
      },
    },
  },
}
