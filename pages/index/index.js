//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList: null,
  },
  onLoad: function () {
    this.setData({
      test: '01',
    })
    this.getProList();
  },
  // 定义点击事件
  toDetail: function(e) {
    console.log(e)
    // index代表的遍历对象的下标
    var index = e.currentTarget.dataset.index;
    console.log(index)
    var proList = this.data.proList;
    var title = proList[index].title;
    wx.setStorageSync('title', title);
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  // API请求方法
  getProList: function() {
    var self = this;
    // request发起一个请求方法
    wx.request({
      url: 'http://guozhaoxi.top/wx/data.json',
      method: 'GET',
      success: function(res) {
        console.log(res);
        self.setData({
          proList: res.data,
        })
      },
      fail: function() {
        console.log('调用数据失败');
      }
    })
  },
  // copy事件，一个基础库兼容的例子
  copy: function () {
    // 检测版本是否具备wx.setClipboardData这个API
    if (wx.setClipboardData) {
      wx.setClipboardData({
        // 复制的内容，可以设置为动态的数据
        data: '我是小斌斌啊',
        success: function (res) {
          // 模态框，2.3版本已不需要
          // wx.showModal({
          //   title: '复制成功',
          //   content: '内容已经复制成功！',
          // })
        }
      })
    }
    else {
      wx.showModal({
        title: '提示',
        content: '您的微信版本太低，请升级',
      })
    }
  }
})
