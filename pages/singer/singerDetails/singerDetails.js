// pages/singer/singerDetails/singerDetails.js
let app = new getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    singMsic: [], //歌手歌曲
    id: '', //歌手id
    ids: '',//歌曲id
    singer_details: {}, //歌手详情
    name: '',//歌曲标题
  },
  getSingerMsic() {
    app.globalData.fly.get(`/artists?id=${this.data.id}`)
      .then(res => {
        let singer_details = res.data.artist;
        let singMsic = res.data.hotSongs;
        this.setData({
          singMsic,
          singer_details,
        })
        // console.log(singMsic)
        // console.log(res)
        // console.log(singer_details)
      }).catch(err => {
        console.log(err)
      })
  },
  msic_details(e) {
    this.setData({
      ids: e.currentTarget.dataset.id,
      name: e.currentTarget.dataset.name
    })
    wx.setStorageSync("imgUrl", e.currentTarget.dataset.img)
    // wx.setStorageSync("msic_item", e.currentTarget.dataset.item)
    wx.navigateTo({
      url: `/pages/index/msicDetails/musicPlayer/musicPlayer?ids=${this.data.ids}&name=${this
      .data.name}`
    })
    wx.setNavigationBarTitle({
      title: '歌曲详情',
    })
    // console.log(this.data.name)
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      id: options.singerId || options.id,
    
    })
    console.log(this.data.id)
    this.getSingerMsic()
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