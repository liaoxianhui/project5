const { default: api } = require("../../http/api")

// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 0,
    arr: [],
    id: null,
    obj: {}
  },
  bindchange(e) {
    // console.log(e.currentTarget.dataset.item.id)
    let id = e.currentTarget.dataset.item.id
    this.setData({
      id: id
    })
    wx.showLoading({
      title: `加载中`
    })
    this.getcurrentactionn()
  },
  // 当前分类
  getcurrentactionn() {
    api.currentactionn(this.data.arr[this.data.activeKey].id).then(res => {
      // console.log(res.data.currentOne)
      this.setData({
        obj: res.data.currentOne
      })
      wx.hideLoading()
    }).catch(err => {
      console.log(err)
    })
  },
  // 侧边栏切换事件
  onChange(e) {
    // console.log(e)
    this.setData({
      activeKey: e.detail
    })
  },
  // 分类列表请求
  getdata() {
    api.indexactionna().then(res => {
      // console.log(res.categoryList)
      this.setData({
        arr: res.categoryList,
        id: res.categoryList[0].id
      })
      this.getcurrentactionn()
    }).catch(err => {
      console.log(err)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getdata()
    console.log(getApp().globalData.activeKey)
    if (getApp().globalData.activeKey != null) {
      this.setData({
        activeKey: getApp().globalData.activeKey
      })
    }
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