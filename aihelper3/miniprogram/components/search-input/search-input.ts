// components/search-input.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    maxLength: {
      type: Number,
      value: 50,
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    value: {
      type: String,
      value: ""
    },

  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindSearchInput(e: any) {
      this.setData({value: e.detail.value});
      this.triggerEvent("searchInput", e.detail);
    },
    handleTap()
    {
      this.triggerEvent("bindSearch", {value: this.data.value});

    }

  }
})