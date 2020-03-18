// components/singerClassification/singerClassification.js
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
    singer: [{
        name: "入驻歌手",
        id: "5001"
      },
      {
        name: "华语男歌手",
        id: "1001"
      },
      {
        name: "华语女歌手",
        id: "1002"
      },
      {
        name: "华语组合/乐队",
        id: "1003"
      },
      {
        name: "欧美男歌手",
        id: "2001"
      },
      {
        name: "欧美女歌手",
        id: "2002"
      },
      {
        name: "欧美组合/乐队",
        id: "2003"
      },
      {
        name: "日本男歌手",
        id: "6001"
      },
      {
        name: "日本女歌手",
        id: "6002"
      },
      {
        name: "日本组合/乐队",
        id: "6003"
      },
      {
        name: "韩国男歌手",
        id: "7001"
      },
      {
        name: "韩国女歌手",
        id: "7002"
      },
      {
        name: "韩国组合/乐队",
        id: "7003"
      },
      {
        name: "其他男歌手",
        id: "4001"
      },
      {
        name: "其他女歌手",
        id: "4002"
      },
      {
        name: "其他组合/乐队",
        id: "4003"
      }
    ], //歌手分类
    count: 0,
    counts: 0,

    retrieve: [], //检索
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getSingerClassify() { //歌手列表
      app.globalData.fly.get(`/artist/list?cat=${this.data.cat}&initial=${this.data.initial}`).then(res => {
        let artists = res.data.artists
        this.setData({
          artists
        })
        this.triggerEvent('artists', this.data.artists) //通过triggerEvent将参数传给父组件
        // console.log(res)
        // console.log(artists)
      }).catch(err => {
        console.log(err)
      })
    },
    check(e) { //顶部导航点击
      let cat = e.currentTarget.dataset.cat
      this.setData({
        count: e.currentTarget.dataset.index,
        cat
      })
      this.getSingerClassify()
      // console.log(this.data.count);
      // console.log(11)
      // console.log(cat)
    },
    getRetrieve() { //得到检索A-Z
      let retrieve = [];
      for (let i = 1; i <= 26; i++) {
        retrieve.push(String.fromCharCode(64 + i))
      }
      this.setData({
        retrieve
      })
      // console.log(this.data.retrieve)
    },
    check_letter(e) { //点击字母
      this.setData({
        counts: e.currentTarget.dataset.index,
        initial: e.currentTarget.dataset.item
      })
      // this.triggerEvent('initial', this.data.initial) //通过triggerEvent将参数传给父组件
      this.getSingerClassify()
      // console.log(this.data.initial)
      // console.log(11)
    },
  },
  ready() {
    this.getRetrieve()
  }
})