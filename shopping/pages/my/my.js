import api from "../../http/api"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isHide: true,
    obj: {}
  },
  // 退出
  bindclear() {
    wx.clearStorageSync()
    this.getstorage()
  },
  // 点击登录
  tologin(res) {
    wx.login({
      success: res => {
        var code = res.code;
        if (code) {
          api.cartListta(code).then(res => {
            console.log(res)
            wx.setStorageSync('openid', res)
          }).catch(err => {
            console.log(err)
          })
        } else {
          console.log('获取用户登录失败：' + res.errMsg);
        }
      }
    })
    if (res.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      // 获取到用户的信息了，打印到控制台上看下
      console.log(res.detail.userInfo);
      wx.setStorageSync('userinformation', res.detail.userInfo)
      //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
      that.setData({
        isHide: false
      });
      this.getstorage()
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '温馨提示',
        content: '您已拒绝授权登录,可能无法正常使用该程序, 请再次点击登录!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          // 用户没有授权成功，不需要改变 isHide 的值
          if (res.confirm) {
            console.log('用户点击了“返回授权”');
          }
        }
      });
    }
  },
  // 请求API授权，获得用户头像和昵称
  bindGetUserInfo() {
    //查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          console.log("用户授权了");
        } else {
          //用户没有授权
          console.log("用户没有授权");
        }
      }
    });
  },
  getstorage() {
    this.setData({
      obj: wx.getStorageSync('userinformation') || {}
    })
    if (JSON.stringify(this.data.obj) !== "{}") {
      this.setData({
        isHide: false
      })
    } else {
      this.setData({
        isHide: true
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.bindGetUserInfo()
    this.getstorage()
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