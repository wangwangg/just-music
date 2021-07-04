module.exports = {
  configureWebpack: {
    devServer: {
      //设置代理 跨域配置
      proxy: {
        '/api': {
          // 请求的地址
          target: 'http://localhost:3000',
          // 路径重写规则
          pathRewrite: { '^/api': '' },
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
        data: `@import "~@/style/variables.scss";`,
      },
    },
  },
}
