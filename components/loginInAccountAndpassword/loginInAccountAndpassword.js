// components/loginInAccountAndpassword/loginInAccountAndpassword.js
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
    code: '', //.成功的验证码
    password: '', //输入的密码
    phone: '', //手机
  },

  /**
   * 组件的方法列表
   */
  methods: {
    cell_phone(e) { //得到电话号码
      this.setData({
        phone: e.detail.value
      })
    },
    passw(e) { //密码
      // console.log(e)
      this.setData({
        password: e.detail.value
      })
    },
    goEnroll() { //去注册页
      wx.navigateTo({
        url: "goInRegister/goInRegister"
      })
       console.log(11)
    },
    phone_nowLogin(e) { //手机登录
      app.globalData.fly.get(`/login/cellphone?phone=${this.data.phone}&password=${this.data.password}`).then(res => {
        console.log(res)
        wx.setStorageSync('user', res.data)
      }).catch(err => {
        console.log(err)
      })
    },
  }
})
