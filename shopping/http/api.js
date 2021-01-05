import fly from "./index"
export default {
  //   1.首页(get): index/index
  indexx() {
    return fly.get(`/index/index`)
  },
  // 2.专题(get): topic/listaction?page=  参数:page:请求页数
  listactionn(page) {
    return fly.get(`/topic/listaction?page=${page}`)
  },
  // 3.分类列表(get): category/indexaction
  indexactionna() {
    return fly.get(`/category/indexaction`)
  },
  // 4.当前分类(get): category/currentaction?id=  参数:id:分类id
  currentactionn(id) {
    return fly.get(`/category/currentaction?id=${id}`)
  },
  // 5.首页分类导航(get): category/categoryNav?id=  参数id: 分类导航id
  categoryNavv(id) {
    return fly.get(`/category/categoryNav?id=${id}`)
  },
  // 6.分类导航商品列表(get): goods/goodsList?categoryId= 参数id: 分类导航id
  goodsListta(id) {
    return fly.get(`/goods/goodsList?categoryId=${id}`)
  },
  // 7.搜索相关(get): search/indexaction?openId=  参数:openId: 生成的openId  - 包括默认关键字 搜索记录 热门搜索
  indexactionnb(openId) {
    return fly.get(`/search/indexaction?openId=${openId}`)
  },
  // 8.添加搜索历史(post): search/addhistoryaction 参数: keyword:关键字 openId:生成的openId
  addhistoryactionn(keyword, openId) {
    return fly.post(`/search/addhistoryaction`, {
      keyword, openId
    })
  },
  // 9.清空搜索记录(post): search/clearhistoryAction 参数:openId:生成的openId
  clearhistoryActionn(openId) {
    return fly.post(`/search/clearhistoryAction`, {
      openId
    })
  },
  // 10.关键字搜索: search/helperaction?keyword= 参数:keyword: 关键字
  helperactionn(keyword) {
    return fly.get(`/search/helperaction?keyword=${keyword}`)
  },
  // 11.首页制造商详情(get): brand/detailaction?id= 参数:id:制造商id
  detailactionna(id) {
    return fly.get(`/brand/detailaction?id=${id}`)
  },
  // 12.查看全部新品:默认综合(get): /goods/goodsList?isNew=1
  goodsListtb() {
    return fly.get(`/goods/goodsList?isNew=1`)
  },
  // 13.全部新品升序排列(get):  goods/goodsList?isNew=1&order=asc
  goodsListascc() {
    return fly.get(`/goods/goodsList?isNew=1&order=asc`)
  },
  // 14.全部新品降序排列(get):  goods/goodsList?isNew=1&order=desc
  goodsListdescc() {
    return fly.get(`/goods/goodsList?isNew=1&order=desc`)
  },
  // 15.全部新品分类排列(get): goods/goodsList?isNew=1 和    12一样
  goodsListtc() {
    return fly.get(`/goods/goodsList?isNew=1`)
  },
  // 16.查看全部人气推荐:默认综合(get): goods/goodsList?isHot=1
  goodsListishotta() {
    return fly.get(`/goods/goodsList?isHot=1`)
  },
  // 17.人气推荐升序排列(get):  goods/goodsList?isHot=1&order=asc
  goodsListishotascc() {
    return fly.get(`/goods/goodsList?isHot=1&order=asc`)
  },
  // 18.人气推荐降序排列(get):  goods/goodsList?isHot=1&order=desc
  goodsListishotdescc() {
    return fly.get(`/goods/goodsList?isHot=1&order=desc`)
  },
  // 19.人气推荐分类排列(get): goods/goodsList?isHot=1 和  16一样
  goodsListishottb(cat) {
    return fly.get(`/goods/goodsList?isHot=1`)
  },
  // 20.商品详情(get):  goods/detailaction?id=&openId= 参数:id 商品id openId:生成的openId
  detailactionnb(id, openId) {
    return fly.get(`/goods/detailaction?id=${id}&openId=${openId}`)
  },
  // 21.专题详情(get):  topic/detailaction?id= 参数:id:专题id
  detailactiontopicc(id) {
    return fly.get(`/topic/detailaction?id=${id}`)
  },
  // 22.加入收藏,商品详情接口会返回是否收藏(post):  collect/addcollect 参数: goodsId:商品id openId: 生成的openId
  addcollectt(goodsId, openId) {
    return fly.post(`/collect/addcollect`, {
      goodsId, openId
    })
  },
  // 23.查看收藏(get):  collect/listAction?openId=  参数: openId: 生成的openId
  listActioncollectt(openId) {
    return fly.get(`/collect/listAction?openId=${openId}`)
  },
  // 24.立即购买(post):  order/submitAction  参数:allPrise:总价 goodsId:商品id openId: 生成的openId
  submitActionn(allPrise, goodsId, openId) {
    return fly.post(`/order/submitAction`, {
      allPrise, goodsId, openId
    })
  },
  // 25.购买详情(get):  order/detailAction  参数: openId: 生成的openId addressId: 地址id
  detailActionnc(openId, addressId) {
    return fly.get(`/order/detailAction?openId=${openId}&addressId=${addressId}`)
  },
  // 26.新增地址(post): address/saveAction 参数: address(省市区) addressId: '' checked:是否默认 detailadress: 地址详情 openId: 生成的openId telNumber:电话 userName: 姓名
  saveActionn(address, addressId, checked, detailadress, openId, telNumber, userName) {
    return fly.post(`/address/saveAction`, {
      address, addressId, checked, detailadress, openId, telNumber, userName
    })
  },
  // 27.获取全部地址(get): address/getListAction?openId=  openId: 生成的openId
  getListActionn(openId) {
    return fly.get(`/address/getListAction?openId=${openId}`)
  },
  // 28.单个地址详情(get): address/detailAction?id= 参数: id: 地址id
  detailActionnd(id) {
    return fly.get(`/address/detailAction?id=${id}`)
  },
  // 29.修改地址(post): 同新增地址一样 addressId传地址id
  saveActionna(address, addressId, checked, detailadress, openId, telNumber, userName) {
    return fly.post(`/address/saveAction`, {
      address, addressId, checked, detailadress, openId, telNumber, userName
    })
  },
  // 30.加入购物车(post): cart/addCart  参数: goodsId:商品id number:数量 openId:生成的openId
  addCartt(goodsId, number, openId) {
    return fly.post(`/cart/addCart`, {
      goodsId, number, openId
    })
  },
  // 31.查看购物车(get): cart/cartList?openId= 参数: openId: 生成的openId
  cartListt(openId) {
    return fly.get(`/cart/cartList?openId=${openId}`)
  },
  // 32.删除购物车(get): cart/deleteAction?id= 参数: 商品id
  deleteActionn(openId) {
    return fly.get(`/cart/deleteAction?id=${id}`)
  },
  // 33.微信登录(post): /login 参数是wx.login获取到的code
  cartListta(code) {
    return fly.post(`/login`, {
      code
    })
  },
}