// components/index/carousel/carousel.js
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
    // arr: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getdata(){
      console.log(this.data.arr)
    }
  }
})
