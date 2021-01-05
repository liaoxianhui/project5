let active = getApp().globalData;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    arr: {
      type: Array
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
    bindClass(e) {
      console.log(e)
      active.activeKey = e.currentTarget.dataset.item.sort_order
      wx.switchTab({
        url: `/pages/classify/classify`,
        success: function (e) {
          var page = getCurrentPages().pop();
          if (page == undefined || page == null) return;
          page.onLoad();
        }
      })
    }
  }
})
