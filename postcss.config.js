module.exports = {
    //配置rem适配移动端
    plugins: {
      "postcss-pxtorem": {
        // 设计稿 375:37.5
        // 设计稿：750:75
        // Vant 是基于 375
        //rootValue: 192,
        propList: ["*"]
      }
    }
  }