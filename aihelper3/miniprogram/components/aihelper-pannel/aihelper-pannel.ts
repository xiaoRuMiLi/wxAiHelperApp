// components/aihelper-pannel/aihelper-pannel.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String, 
      value: "我是你的智能客服，长按我可以问我问题，你有什么想了解的吗？"
    }, 
    title: {
      type: String, 
      value: "Hi ~ 欢迎你！"
    },
    request: {
      type: Object,
      value: ()=> { return new Promise(() => {})} ,
    },
    /*loading: {
      type: Boolean,
      value: false
    },*/
    imgSrc: {
      type: String,
      value: "/static/image/person/smallgirl-removebg-preview.png"
    },
    

  },

  /**
   * 组件的初始数据
   */
  data: {
    welcome: true,
    longPress: false,
  },
  observers: {
    /*"text": function(text: string)
    {
      this.setData({welcome: false});
    }*/

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleLongPress() {
      if (this.data.welcome) this.setData({welcome: false});
      if (!this.data.longPress) this.setData({longPress: true});
      console.log("长按了500毫秒");
      this.triggerEvent("onPersonLongPress", {});
      // 获取全局唯一的录音管理器
      const recorderManager = wx.getRecorderManager();

      // 开始录音
      recorderManager.start({
        duration: 10000,
        sampleRate: 16000,
        numberOfChannels: 1,
        encodeBitRate: 48000,
        format: 'mp3'
      });

      // 监听录音结束
      recorderManager.onStop((res) => {
        console.log('录音结束');
        if (res.duration >= 1000) { // 确保录音时间超过1秒
          console.log('录音文件路径', res.tempFilePath);
          this.triggerEvent("onListenEnd", res);
          // 这里可以上传录音文件到服务器或进行其他处理
          // 上传录音文件
          /*wx.uploadFile({
            url: '你的服务器上传接口',
            filePath: res.tempFilePath,
            name: 'file',
            success: (uploadRes) => {
              // 上传成功后的处理逻辑
              console.log(uploadRes.data);
            }
          });*/
        } else {
          // 录音时间太短，可以提示用户
          wx.showToast({
            title: '录音时间太短',
            icon: 'none'
          });
        }
        
      });
    },

    handleTouchEnd()
    {
      console.log("录音结束");
      if (this.data.longPress) {
         // 获取全局唯一的录音管理器
        const recorderManager = wx.getRecorderManager();
        recorderManager.stop();
        this.setData({longPress: false});
      }
     
    }
    

  }
})