// pages/singer/singer.js
let app = new getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
   artists:"",//子组件传过来的歌手列表
  },
  getartists(e){//得到儿子传来的值
    this.setData({
      artists:e.detail
    })
    // console.log(this.data.artists)
  },
  getSingerClassify() {//歌手列表
    app.globalData.fly.get(`/artist/list`).then(res => {
      let artists = res.data.artists
      this.setData({
        artists
      })
      // console.log(res)
      // console.log(artists)
    }).catch(err => {
      console.log(err)
    })
  },
  toSingerMusic(e) {//去到歌手详情
    let singerId = e.currentTarget.dataset.singerid
    this.setData({
      singerId
    })
    wx.navigateTo({
      url: `singerDetails/singerDetails?singerId=${this.data.singerId}`,
    })
    wx.setNavigationBarTitle({
      title: '歌手详情',
    })
    // console.log(e)
    console.log(this.data.singerId)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSingerClassify()
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