// components/takeTurnsToPlay/takeTurnsToPlay.js
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
    banners: [], //轮播图
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getbanner() { //轮播图
      app.globalData.fly.get(`/banner`).then(res => {
        let banners = res.data.banners;
        this.setData({
          banners
        })
        // console.log(banners)
      }).catch(err => {
        console.log(res)
      })
    },
  },
  ready(){
    this.getbanner() 
  }
})
