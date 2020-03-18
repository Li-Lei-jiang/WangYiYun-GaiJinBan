// pages/me/myMsic/myMsic.js
const app = new getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',//用户歌单id
    uid: '',//用户id
    playlist: [],//用户歌单
  },
  getuserMsic() {//个人喜欢的音乐
    app.globalData.fly.get(`/user/playlist?uid=${this.data.uid}`).then(res => {
      console.log(res)
      this.setData({
        playlist: res.data.playlist[0],
        id: res.data.playlist[0].id
      })
      console.log(this.data.playlist)
    }).catch(err => {
      console.log(err)
    })
  },
  goplay() {//去歌曲播放页
    wx.navigateTo({
      url: `/pages/index/msicDetails/msicDetails?id=${this.data.id}`,
    })
    wx.setNavigationBarTitle({
      title: this.data.playlist.name,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      uid: wx.getStorageSync('suerProfile').userId
    })
    console.log(wx.getStorageSync('suerProfile'))
    console.log(this.data.uid)
    this.getuserMsic()
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