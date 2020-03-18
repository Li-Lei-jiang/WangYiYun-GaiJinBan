// pages/index/singerList/singerList.js
const app = new getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    singerList: [
      {
        name: "单曲",
        type: "1",
        index: "0"
      },
      {
        name: "专辑",
        type: "10",
        index: "1"
      },
      {
        name: "歌手",
        type: "100",
        index: "2"
      },
      {
        name: "歌单",
        type: "1000",
        index: "3"
      },
      {
        name: "用户",
        type: "1002",
        index: "4"
      },

      {
        name: "电台",
        type: "1009",
        index: "5"
      },
      {
        name: "视频",
        type: "1014",
        index: "6"
      },
      {
        name: "综合",
        type: "1018",
        index: "7"
      },
    ],
    keywords: '', //关键词
    type: '', //搜索类型 如果传 'mobile' 则返回移动端数据
    cont: 0, //计算属性
    songs: [], //单曲
    albums: [], //专辑
    artists: [],//歌手
    playlists: [],//歌单
    userprofiles: [],//用户
    videos: [],//视频
    djRadios: [],//电台
    djRadiosid: '',//电台单个id
    inputvalue: '',//storage的值
    specialid:'',//专辑id
  },
  inputVal(e) {//得到第二输入框的值
    this.setData({
      keywords: e.detail.value 
    })
    console.log(e)
  },
  getType(e) { //获取关键词+类型的数据
    this.setData({
      type: e.currentTarget.dataset.type,
      cont: e.currentTarget.dataset.index,
    })
    // console.log(this.data.type)
    // console.log(e)
    app.globalData.fly.get(`/search?type=${this.data.type}&keywords=${this.data.keywords}`).then(res => {
      this.setData({
        songs: res.data.result.songs,
        albums: res.data.result.albums,
        artists: res.data.result.artists,
        playlists: res.data.result.playlists,
        userprofiles: res.data.result.userprofiles,
        videos: res.data.result.videos,
        djRadios: res.data.result.djRadios
      })
      // console.log(this.data.artists)
      // console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  
  gospecial(e) {//去专辑页面
    let id = e.currentTarget.dataset.id;//搜索专辑的id
    wx.setStorageSync('blurPicUrl', e.currentTarget.dataset.item.blurPicUrl)
  wx.navigateTo({
    url: `/pages/index/newSong/newSong?id=${id}`,
  })
    console.log(e)
  },
  toDianT(e) {//去电台
    this.setData({
      djRadiosid: e.currentTarget.dataset.id
    })
    wx.navigateTo({
      url: `/pages/index/dianT/dianT?djRadiosid=${this.data.djRadiosid}`,
    })
    wx.setNavigationBarTitle({
      title: '电台',
    })
    wx.setStorageSync('dianT', e.currentTarget.dataset.item)
    // console.log(e)
    // console.log(e.currentTarget.dataset.item)
  },
  goMsicDetails(e){//去歌手详情
  let id = e.currentTarget.dataset.id//搜索歌手
    wx.navigateTo({
      url: `/pages/singer/singerDetails/singerDetails?id=${id}`,
    })
    wx.setNavigationBarTitle({
      title: '歌手详情',
    })
    console.log(e.currentTarget.dataset.id)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      // inputvalue: wx.getStorageSync('inputvalue')&& wx.getStorageSync('keywordsed')
      inputvalue: options.keywordsed || options.inputvalue,
      keywords: options.keywordsed || options.inputvalue
    })
  //   setTimeout(()=>{
  //     this.getType()
  //   },3000)
  //  console.log()
  //   console.log(this.data.keywords)
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