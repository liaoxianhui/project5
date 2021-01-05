// components/classify/currentaction/currentaction.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    obj: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindgoodslist(e) {
      let sub = JSON.stringify(this.properties.obj.subList)
      let index = e.currentTarget.dataset.index
      wx.navigateTo({
        url: `/pages/goodsList/goodsList?sub=${sub}&index=${index}`
      })
    },
  }
})
