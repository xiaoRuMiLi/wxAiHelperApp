// components/cell/cell.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: "标题"
    },
    value: {
      type: String,
      value: "按钮"
    },
    isLink: {
      type: Boolean,
      value: false,
    },
    url: {
      type: String,
      value: ""
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
    handleTapRight(e: any)
    {
      if (this.url)
      {
        wx.navigateTo({url: this.url});
        return;
      }
      this.triggerEvent("onTapRight", e);
    }

  }
})