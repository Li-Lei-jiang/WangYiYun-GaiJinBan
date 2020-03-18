// pages/index/msicDetails/msicDetails.js
const app = new getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',//传过来的id 歌曲的
    ids:'',//获取到的单个歌曲的id
    menu_details: {},//歌单详情
    tracks: [],//歌单列表
  },
  getmenu() {//获取歌单详情
  //加载图标
  wx.showToast({
    title: '加载中...',
    icon:'none',
  })
   if(this.data.id !=""){
     app.globalData.fly.get(`/playlist/detail?id=${this.data.id}`).then(res => {
       let menu_details = res.data.playlist;
       let tracks = res.data.playlist.tracks;
       this.setData({
         menu_details,
         tracks
       })
       wx.hideToast()
      //  console.log(res.data)
      //  console.log(res)
      //  console.log(this.data.tracks)
      //  console.log(this.data.menu_details)
     }).catch(err => {
       console.log(err)
     })
   }
  },
  musicPlayer(e){
    this.setData({
      ids: e.currentTarget.dataset.id,
      name: e.currentTarget.dataset.name
    })
    wx.setStorageSync('picUrl', e.currentTarget.dataset.item.al.picUrl)
    wx.navigateTo({
      url: `musicPlayer/musicPlayer?ids=${this.data.ids}&name=${this.data.name}`,
    })
    wx.setNavigationBarTitle({
      title:'播放歌曲',
    })
    
    // console.log(e.currentTarget.dataset)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id,
      // id: options.specialid

    })
    // console.log(this.data.id)
    this.getmenu()
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