// pages/index/newSong/newSong.js
const app = new getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newSong:{},//新碟的数据
    // ids:'',//,歌曲id
    imgUrl:'',//图片路径
    id:'',//搜索专辑传过来的id
   
  },
  getAlbum(){
    app.globalData.fly.get(`/album?id=${this.data.id}&limit=30`).then(res=>{
      console.log(res)
      this.setData({
        newSong:res.data
        })
        console.log(this.data.newSong)
    }).catch(err=>{
      console.log(err)
    })
  },
  goBack(){
    wx.navigateBack({})
  },
  goPlay(e){
    let id = e.currentTarget.dataset.id
    wx.setStorageSync('picUrl', e.currentTarget.dataset.item.al.picUrl)
    wx.navigateTo({
      url: `/pages/index/msicDetails/musicPlayer/musicPlayer?id=${id}`,
    })
    // console.log(e.currentTarget.dataset.item.al.picUrl)
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      // newSong: wx.getStorageSync('NewSong'),
      imgUrl: wx.getStorageSync('blurPicUrl'),
      id: options.id
    })
    this.getAlbum()
    // wx.setStorageSync('imgUrl', wx.getStorageSync('NewSong').blurPicUrl)
    // console.log(wx.getStorageSync('NewSong').blurPicUrl)
    // console.log(this.data.id)
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