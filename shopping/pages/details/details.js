import api from "../../http/api"
import Wxparse from "../../lib/wxParse/wxParse"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: null,
    id: null,
    obj: {},
    goods: null,
    arr: [],
    flag: false,
  },
  getcollect() {
    api.listActioncollectt(this.data.openid).then(res => {
      console.log(res)
      this.setData({
        arr: res.collectGoodsList
      })
      this.data.arr.map(item => {
        if (item.id == this.data.id) {
          this.setData({
            flag: true
          })
        }
      })

    }).catch(err => {
      console.log(err)
    })
  },
  clickcollect() {
    this.getaddcollectt()
    this.getcollect()
  },
  // 跳转到详情页
  bindDetails(e) {
    let id = e.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `/pages/details/details?id=${id}`,
    })
  },
  // 加入收藏
  getaddcollectt() {
    api.addcollectt(this.data.id, this.data.openid).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  // 详情请求
  getData() {
    api.detailactionnb(this.data.id, this.data.openid).then(res => {
      console.log(res)
      this.setData({
        obj: res,
        goods: res.info.goods_desc
      })
      Wxparse.wxParse("goods", "html", this.data.goods, this)
    }).catch(err => {
      console.log(err)
    })
  },
  getstorage() {
    let obj = wx.getStorageSync('openid') || {}
    this.setData({
      openid: obj.openid
    })
    this.getData()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    this.getstorage()
    this.getcollect()
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