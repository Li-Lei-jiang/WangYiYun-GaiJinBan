// components/new/new.js
let app = new getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    newPower:{
      type:Array,
      value:'',
    },
    newIndex:{
      type:Number,
      value:'',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    title:[
      {

      }
    ],
    ids:"",//新势力id
    dianTaid:"",//电台id
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getNew(e){
      this.setData({
        ids: e.currentTarget.dataset.id
      })
      wx.setStorageSync('picUrl', e.currentTarget.dataset.item.song.album.picUrl)
      wx.navigateTo({
        url: `/pages/index/msicDetails/musicPlayer/musicPlayer?ids=${this.data.ids}`,
      })
      wx.setNavigationBarTitle({
        title: '新音乐',
      })
      // console.log(e)
      // console.log(e.currentTarget.dataset.item.song.album.picUrl)
    },
    getDiant(e){
      this.setData({
        dianTaid: e.currentTarget.dataset.id
      })
      wx.navigateTo({
        url: `dianT/dianT?dianTaid=${this.data.dianTaid}`,
      })
      // wx.setStorageSync('broadcastingStation', e.currentTarget.dataset.item)
      wx.setNavigationBarTitle({
        title: '电台',
      })
      console.log(e)
      // console.log(this.data.dianTaid)
    },
    // goCARD(e){
    //   console.log(e)
    // }
  },
  ready(){
    // console.log(this.data.newPower)
    // console.log(this.data.newIndex)
  }
})
