// pages/home/components/horizontal-slider/horizontal-slider.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    itemList: {
      type: Array,
      value: [
        {title: "测试标题", text: "测试使用文本内容", img: "/static/image/person/smallgirl-removebg-preview.png"},
        {title: "测试标题", text: "测试使用文本内容", img: "/static/image/person/smallgirl-removebg-preview.png"},
        {title: "测试标题", text: "测试使用文本内容", img: "/static/image/person/smallgirl-removebg-preview.png"},
        {title: "测试标题", text: "测试使用文本内容", img: "/static/image/person/smallgirl-removebg-preview.png"}
      ]
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTapItem(e: any)
    {
      // 抛出元素被点击事件
      this.triggerEvent("bindTapItem", {index: e.currentTarget.dataset.key});
      
    },
    

  }
})