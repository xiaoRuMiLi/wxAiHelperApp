// pages/home/home.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aiAnswer: "我是你的智能客服，长按我可以问我问题，你有什么想了解的吗？",
    recommendList: [
      {
        title: "政务中心咨询台",
        description: "模仿政务中心咨询台接待员，询问办事人员所要办的政务，并给出建议",
        appreciate: 50

      },
      {
        title: "汽车修理厂客服",
        description: "询问客户诉求，并为客户分析故障，报修故障登记和维修时间预约。",
        appreciate: 10

      },
      {
        title: "销售回访员",
        description: "收集客户反馈，并询问客户给商品给出意见和评分",
        appreciate: 15

      },
      {
        title: "某医院咨询台",
        description: "指导患者就医流程，回答患者问题，并可以根据患者的就医科室给患者指路",
        appreciate: 8

      }
    ]

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
  handleTapItem(e: any)
  {
    console.log("点击项目")
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