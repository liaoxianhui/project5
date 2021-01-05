const { default: api } = require("../../http/api")

// pages/goodsList/goodsList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [],
    obj: {},
    active: null,
    arrdata: []
  },
  binddetails(e) {
    let id = e.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `/pages/details/details?id=${id}`,
    })
  },
  bindchange(e) {
    console.log(e.detail.index)
    this.setData({
      active: e.detail.index
    })
    this.getData()
  },
  getData() {
    wx.showLoading({
      title: `加载中`
    })
    api.goodsListta(this.data.arr[this.data.active].id).then(res => {
      console.log(res)
      this.setData({
        obj: res.currentNav,
        arrdata: res.data
      })
      wx.hideLoading()
    }).catch(err => {
      console.log(err)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      arr: JSON.parse(options.sub),
      active: JSON.parse(options.index)
    })
    if (this.data.active == 0) {
      this.getData()
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