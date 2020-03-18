// components/newSongNewAlbum/newSongNewAlbum.js
let app = new getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    newSong: [], //新碟数组
    id:'',//新碟id
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getNewSong() { //获得新碟数据
      wx.showLoading({
        title: '加载中...',
      })
      app.globalData.fly.get(`/album/newest`).then(res => {
        let newSong = res.data.albums.slice(0,6);
        this.setData({
          newSong
        })
        wx.hideLoading()
        // console.log(this.data.newSong)
      
      }).catch(err => {
        console.log(res)
      })
    },
    goToNewSong(e){//去新碟/专辑页面
      console.log(e)
      let id = e.currentTarget.dataset.id
      // wx.setStorageSync('NewSong', e.currentTarget.dataset.item)
      wx.navigateTo({
        url: `newSong/newSong?id=${id}`,
      })
      // wx.setNavigationBarTitle({
      //   title: '新碟',
      // })
    }
  },
  ready() {
    this.getNewSong()
  }
})
