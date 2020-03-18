let app = new getApp()
Page({


  /**
   * 页面的初始数据
   */
  data: {
    newMusic: [], //新势力
    id:'',//列表单个歌曲的id
    recommendRadio: [], //推荐电台
    cont:1,//判断传参给子组件以显示类容
    dT: 2,//判断传参给子组件以显示类容
    CARD: 3,//判断传参给子组件以显示类容
    recommendShows: [], //推荐节目
  },
  getNewMusic() { //音乐新势力
    wx.showLoading({
      title: '加载中...',
    })
    app.globalData.fly.get(`/personalized/newsong`).then(res => {
      this.setData({
          newMusic: res.data.result.slice(0, 6)
      })
      wx.hideLoading()
      this.getBroadcastingStation()
      // console.log(this.data.newMusic)
    }).catch(err => {
      console.log(res)
    })
  },
  getBroadcastingStation() { //得到推荐电台
    wx.showLoading({
      title: '加载中...',
    })
    app.globalData.fly.get(`/personalized/djprogram`).then(res => {
      this.setData({
          recommendRadio:res.data.result
      })
      wx.hideLoading()
      this.getrecommendShows() 
      // console.log(res)
    }).catch(err => {
      console.log(res)
    })
  },
  getrecommendShows() { //推荐节目
    wx.showLoading({
      title: '加载中...',
    })
    app.globalData.fly.get(`/program/recommend`).then(res => {
      let recommendShows = res.data.programs.slice(0, 6);
      this.setData({
        recommendShows
      })
      wx.hideLoading()
      // console.log(recommendShows)
    }).catch(err => {
      console.log(res)
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNewMusic()
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})