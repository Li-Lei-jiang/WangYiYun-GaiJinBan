const app = new getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openId: '',//登录后获得的令牌
    profile: {},//用户配置信息
  },
  
  gologin() {
    wx.navigateTo({//去登录页
      url: "./login/login",
    })
  },
  gocompile() {//跳转我的资料页面
    wx.navigateTo({
      url: '/pages/me/myProfile/myProfile',
    })
    wx.setNavigationBarTitle({
      title: '我的资料',
    })
  },
  outMusic() {//退出
    app.globalData.fly.get(`/logout`).then(res => {
      console.log(res)
      let code = res.data.code;
      if (code === 200) {
        wx.showToast({
          title: '退出登录成功',
        })
        wx.clearStorageSync('urse')
        wx.switchTab({
          url: '/pages/index/index',
        })
      }

    }).catch(err => {
      console.log(err)
    })
  },
  myMsic(){
    wx.navigateTo({
      url: '/pages/me/myMsic/myMsic',
    })
    wx.setNavigationBarTitle({
      title: '我的音乐',
    })
  },
  getToken() {//调取是否有 openId 没有显示请登录
   wx.getStorageSync('openId')
   this.setData({
     openId: wx.getStorageSync('openId'),
     profile: wx.getStorageSync('suerProfile')
   })
  //  console.log(this.data.openId.length)

    // console.log(this.data.profile)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorageSync('openId')
    console.log(wx.getStorageSync('openId'))
    
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
    this.getToken()
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