// pages/detail.js
//获取应用实例，才能调用全局变量
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    iskebi: false,
    iszhan: false,
    isqiao: false,
    isgeli: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
    var title = wx.getStorageSync('titleName');
    console.log(title);
    if (title == '科比·布莱恩特') {
      this.setData({ iskebi: true });
    } else if (title == '勒布朗·詹姆斯') {
      this.setData({ iszhan: true });
    } else if (title == '迈克尔·乔丹') {
      this.setData({ isqiao: true });
    } else {
      this.setData({ isgeli: true });
    }
  },
})