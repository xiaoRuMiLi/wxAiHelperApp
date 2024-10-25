// pages/home/home.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aiAnswer: "我是你的智能客服，长按我可以问我问题，你有什么想了解的吗？"

  },
  
  handleListenStart() {
    console.log("听你讲话");
    
  },
  handleListenEnd(e: {detail: any}) {
    console.log(e.detail);
  },
  bindSearchInput(e: any)
  {

    console.log("搜索输入值改变事件", e.detail.value);
  },
  bindSearch(e: any)
  {
    console.log("点击搜索", e.detail.value);

  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    setTimeout(() => {
      //this.setData({aiAnswer: "我是你的智能客服，我将为你解答你遇到的所有问题。请长按我与我进行对话！"});
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})