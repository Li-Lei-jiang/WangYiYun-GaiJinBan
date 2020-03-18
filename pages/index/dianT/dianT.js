// pages/index/dianT/dianT.js
const app = new getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',//电台id
    program:{},//电台的信息数据
    count: 1, //计算属性
    picUrl:'',//电台的图片
  },

  checkedDetails(){//电台详情
    this.setData({
      count: 1
    })
    console.log(11)
  },
  checkedCARD(){//电台节目
    this.setData({
      count: 2
    }) 
    app.globalData.fly.get(`/song/url?id=${this.data.id}`).then(res => {
      console.log(res)
      this.setData({
        // program: res.data.program,
      })
      // console.log(res.data.program)
    }).catch(err => {
      console.log(err)
    })
    console.log(221)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.dianTaid || options.djRadiosid ,
      picUrl: wx.getStorageSync('dianT').picUrl
    })
    this.getDianT()

  },
  getDianT(){
    app.globalData.fly.get(`/dj/program/detail?id=${this.data.id}`).then(res=>{
      // console.log(res)
      this.setData({
        program: res.data.program,
      })
      // console.log(res.data.program)
    }).catch(err=>{
      console.log(err)
    })
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