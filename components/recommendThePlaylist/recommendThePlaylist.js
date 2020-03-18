// components/recommendThePlaylist/recommendThePlaylist.js
const app = new getApp()
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
    music_list: [], //歌单数组
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getlist() { //得到推荐歌单6个
      wx.showLoading({
        title: '加载中...',
      })
      app.globalData.fly.get(`/personalized`).then(res => {
        let music_list = res.data.result.slice(0, 6);
        this.setData({
          music_list
        })
        wx.hideLoading()
        // console.log(music_list)
        // console.log(res.data)
      }).catch(err => {
        console.log(res)
      })
    },
    toMenu(e) {//去歌单详细
      this.setData({
        id: e.currentTarget.dataset.id
      })
      // console.log(this.data.id)
      wx.navigateTo({
        url: `/pages/index/msicDetails/msicDetails?id=${this.data.id}`,
      })
      wx.setNavigationBarTitle({
        title: '歌单',
      })
    },
  },
  ready(){
    this.getlist()
  }
})
