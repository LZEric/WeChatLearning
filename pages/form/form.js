// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true'},
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
    ]
  
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
  
  },
  /* 表单提交和重置 */
  submit:function(e){
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  reset:function(e){
    console.log('form发生了reset事件')
  },
  checkboxChange:function(e){
    console.log('选择了：', e.detail.value)
  },
  /* 跳转  */
  jumpToNext: function (param) {
    wx.navigateTo({
      url: '../form/picker/picker',
    })
  },
})