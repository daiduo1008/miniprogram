// pages/set/set.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectShow:false,//初始option不显示
    nowText:"请选择",//初始内容
    animationData:{},//右边箭头的动画
    list:[
      {
        id:0,
        name:"加法",
        value:"add"
      },
      {
        id:1,
        name:"减法",
        value:"sub"
      },
      {
        id:2,
        name:"乘法",
        value:"mul"
      },
      {
        id:3,
        name:"除法",
        value:"div"
      }
    ],
    checkedList:[],
    selectArray: [
      {id: 0, text: '1'},
      {id: 1, text: '2'},
      {id: 2, text: '3'},
      {id: 3, text: '4'},
    ]
  },

  // 复选框的选中事件
  HandelItemChange(e){
    // 1 获取被选中的复选框的值
    const checkedList = e.detail.value;
    // 2 进行赋值
    this.setData({
      checkedList
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})