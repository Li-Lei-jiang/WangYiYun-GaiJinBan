// pages/index/msicDetails/musicPlayer/musicPlayer.js
let app = getApp()
const bgmyMsic = wx.getBackgroundAudioManager() //创建背景音乐
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '', //传过来的单首歌曲id
    imgUrl: '', //图片途径
    src: '',
    // name: '', //歌曲标题
    powerUrl: '', //新势力图片路径
    flag: true, //判断标签
    schedule: '', //进度条%值
    valueNum:'',//当前播放位置未处理
    sliderMin:'',//处理后的最小值
    sliderMax:'',//处理后的总值
    duration:'',//总长度音未处理
  },
  getSingerDetails() { //
  //一进来加载图标数据
  wx.showLoading({
    title: '加载中',
  })
  //获取音乐url
    app.globalData.fly.get(`/song/url?id=${this.data.id}`)
      .then(res => {
        this.setData({
          src: res.data.data[0].url,//音乐的src
          imgUrl: wx.getStorageSync('picUrl') || wx.getStorageSync('imgUrl')//图片路径
        })
        wx.hideLoading()
        if(this.data.src===null){//为空切换下一曲
          wx.showToast({
            title: '当前歌曲不支持播放',
            icon:none,
          })
          bgmyMsic.stop()
        }else{//不为空就让src=当前歌曲src
          bgmyMsic.src = this.data.src;
        }
        this.autoplay()//点进来就播放
        // console.log(this.data.src)
        // console.log(res)
      }).catch(err => {
        console.log(err)
      })
  },
  autoplay(){ //播放音乐
   let that = this;
   let src = that.data.src;
    bgmyMsic.title = '123';
    bgmyMsic.src = that.data.src;
    bgmyMsic.play();
    console.log('播放')
    console.log(bgmyMsic)
    bgmyMsic.onTimeUpdate(()=>{//播放进度监听
      let times = bgmyMsic.currentTime;
    that.setData({
      valueNum: parseInt(bgmyMsic.currentTime),//得到进度条的事实变化值 转为整数未处理
    })
      let minute1 = parseInt(that.data.valueNum/60);//得到分钟
      let sec1 = parseInt(that.data.valueNum % 60); //得到秒
      if (minute1.toString().length === 1) { minute1 = `0${minute1}`}
      if (sec1.toString().length === 1) { sec1 = `0${sec1}` }
      this.setData({
        sliderMin:`${minute1}:${sec1}`//处理后的最小时间 00：00
      })
      setTimeout(() => {
        let itme = bgmyMsic.duration;//未处理的总时长
        this.setData({
          duration: bgmyMsic.duration
        })
        let minute2 = parseInt(that.data.duration / 60);//得到分钟
        let sec2 = parseInt(that.data.duration % 60); //得到秒
        if (minute2.toString().length === 1) { minute2 = `0${minute2}` }
        if (sec2.toString().length === 1) { sec2 = `0${sec2}` }
        this.setData({
          sliderMax: `${minute2}:${sec2}`
        })
      }, 1000)
      // console.log(that.data.sliderMin)
      // console.log(that.data.sliderMax)
      // console.log(that.data.duration)
      // console.log(that.data.schedule)
    })
    bgmyMsic.onEnded(()=>{//监听播放结束
      console.log('播放结束')
    })   
  },
   
  gopaly() {//播放音乐  
  this.setData({
    flag:false
  })
    bgmyMsic.pause();
  console.log('暂停') 
  },
  gostop(){
    this.setData({
      flag: true
    })
    bgmyMsic.play();
    console.log('播放')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      id: options.id,
      id: options.ids,
      name: options.name,
      // imgUrl: options.picUrl,
      powerUrl: wx.getStorageSync('power')
    })
    this.getSingerDetails()
    
    // console.log(this.data.powerUrl)
    // console.log(this.data.imgUrl)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
// 拖拽进度条
  drag(e) {
    // event.detail.value
    bgmyMsic.seek(e.detail.value)
  },

  
  //上一曲
  // inASong(){

  // },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide:function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})