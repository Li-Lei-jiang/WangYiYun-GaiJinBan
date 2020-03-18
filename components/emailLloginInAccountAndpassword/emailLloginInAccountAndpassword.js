// components/emailLloginInAccountAndpassword/emailLloginInAccountAndpassword.js
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
    email: '', //邮箱的值
    password: '', //输入的密码
  },
  /**
   * 组件的方法列表
   */
  methods: {
    cell_email(e) { //获取邮箱
      // console.log(e)
      this.setData({
        email: e.detail.value
      })
    },
    cell_passw(e) { //获取密码
      // console.log(e)
      this.setData({
        password: e.detail.value
      })
    },
    email_nowLogin(e) { //邮箱登录
      app.globalData.fly.get(`/login?email=${this.data.email}&password=${this.data.password}`).then(res => {
        console.log(res)
        let code = res.data.code;
        if (code === 200) {
          wx.showToast({
            title: '登录成功',
            icon: 'success',
          })
          wx.switchTab({
            url: '/pages/me/me',
          })
          wx.setNavigationBarTitle({
            title: '个人中心',
          })
          // wx.hideToast();
          wx.setStorageSync('openId', res.data.token); //获得识别令牌
          wx.setStorageSync('suerProfile', res.data.profile); //保存到本地用户基本信息
          
        }else{
          wx.showToast({
            title: '密码或账号错误',
            icon: 'none',
          })
        }
      }).catch(err => {
        console.log(err)
        wx.showToast({
          title: '密码或账号错误',
          icon: 'none',
        })
      })
    },
    goEnroll() { //去注册页
      wx.navigateTo({
        url: '/pages/me/login/goInRegister/goInRegister',
      })
      console.log(11)
    },

  }
})