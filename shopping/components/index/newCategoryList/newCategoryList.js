// components/index/newCategoryList/newCategoryList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    arr: {
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
    binddetails(e) {
      console.log(e)
      let id = e.currentTarget.dataset.item.id
      wx.navigateTo({
        url: `/pages/details/details?id=${id}`
      })
    }
  }
})
