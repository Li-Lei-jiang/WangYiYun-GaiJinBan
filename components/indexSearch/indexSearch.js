// components/indexSearch/indexSearch.js
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
    flag:false,//获取input焦点事件 true 为获取到
    inputVal:'',//input的值
    show: false,//第二层的input的聚焦事件 true 为获取到
    host:[],//热搜列表
    arr:[],//空数组
    keywords: '',//关键词'
    // inputvalue:'',//第二搜索的input值
    songs:[],//单曲
    artists:[],//歌手
    keywordsed: '',//第二搜索的input关键词
  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputShow(e){//聚焦事件
     this.setData({
       flag : !this.data.flag
     })
     this.getveryHot()
      // console.log(this.data.flag)
    },
    searchs(e){
      this.setData({
        show: !this.data.show
      })
      
    },
    getveryHot() {//获得热搜数据
      app.globalData.fly.get(`/search/hot`).then(res => {
        this.setData({
          host: res.data.result.hots
        })
        // console.log(this.data.host)
        // console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    getSerch(){
     
    },
    inputevent(e) {//得到搜索建议
      let keywords = e.detail.value
      this.setData({
        keywords
      })
      if (this.data.show === true) {//
        app.globalData.fly.get(`/search/suggest?keywords=${keywords}`).then(res => {
          this.setData({
            songs: res.data.result.songs,
            artists: res.data.result.artists
          })
          // console.log(this.data.songs)
          // console.log(res)
        }).catch(err => {
          console.log(err)
        })
      }
     
    },
    dones(e){//提交确认事件
      let inputvalue=  e.detail.value;
      wx.navigateTo({
        url: `/pages/index/singerList/singerList?inputvalue=${inputvalue}`,
      })
      // wx.setStorageSync('inputvalue', e.detail.value)
      wx.setNavigationBarTitle({
        title: '歌手列表',
      })
      // console.log(e)
      // console.log(this.data.inputvalue)
    },
    getSuggest(e){
      let keywordsed = e.currentTarget.dataset.nema;
      wx.navigateTo({
        url: `/pages/index/singerList/singerList?keywordsed=${keywordsed}`,
      })
      // wx.setStorageSync('keywordsed',e.currentTarget.dataset.nema,)
      wx.setNavigationBarTitle({
        title: '歌手列表',
      })
      // console.log(keywordsed)
      // console.log(e.currentTarget.dataset.nema)
      // console.log(e)
    },
    
  },
  
  ready(){
    
  }
})
