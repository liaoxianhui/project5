import api from "../../http/api"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr1: [],
    arr2: [],
    arr3: [],
    arr4: [],
    arr5: [],
  },
  // 首页数据
  getdata() {
    api.indexx().then(res => {
      // console.log(res)
      this.setData({
        arr1: res.banner,
        arr2: res.channel,
        arr3: res.brandList,
        arr4: res.newGoods,
        arr5: res.hotGoods,
        arr6: res.topicList,
        arr7: res.newCategoryList[0],
        arr8: res.newCategoryList[1],
        arr9: res.newCategoryList[2],
        arr10: res.newCategoryList[3],
        arr11: res.newCategoryList[4],
        arr12: res.newCategoryList[5],
        arr13: res.newCategoryList[6],
        arr14: res.newCategoryList[7],
        arr15: res.newCategoryList[8],
      })
      // console.log(this.data.arr1)
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})