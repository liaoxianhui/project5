const { default: api } = require("../../http/api")

// pages/special/special.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [],
    total: null,
    page: 1,
  },
  // 跳转详情专题
  bindtap(e) {
    let id = e.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `/pages/specialDetails/specialDetails?id=${id}`,
    })
  },
  // 发请求
  getdata() {
    let arrbottom = []
    api.listactionn(this.data.page).then(res => {
      // console.log(res)
      arrbottom = this.data.arr
      this.setData({
        arr: res.data,
        total: res.total
      })
      this.data.arr = arrbottom.concat(this.data.arr)
      this.setData({
        arr: this.data.arr
      })
      // console.log(this.data.arr)
      wx.hideLoading()
    }).catch(err => {
      console.log(err)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getdata()
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
    if (this.data.page < this.data.total) {
      wx.showLoading({
        title: "加载中"
      })
      this.data.page++
      this.getdata()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})