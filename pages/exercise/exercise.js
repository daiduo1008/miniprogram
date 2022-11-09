// pages/exercise/exercise.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[
      {tid:'01'},
      {tid:'02'},
      {tid:'03'},
      {tid:'04'},
      {tid:'05'},
      {tid:'06'},
      {tid:'07'},
      {tid:'08'},
      {tid:'09'},
      {tid:'10'},
      {tid:'11'},
      {tid:'12'},
      {tid:'13'},
      {tid:'14'},
      {tid:'15'},
      {tid:'16'},
    ],
    timer: '',//定时器名字
    countDownNum: '60',//倒计时初始值
    //键盘显示 和隐藏  true是hidden  false是显示
    showkeyborad: false , 
    
    answer:[],
    before:"<  上一题",
    after:"下一题  >"
  },

  //自定义键盘函数  取消按钮
  boardcancle: function (e) {
    this.setData({
      showkeyborad: false,
    })
  },
  //自定义键盘函数  确定按钮
  boardsubmit: function (e) {
    console.log(e)
    var inputval = e.detail;
    this.setData({
      showkeyborad: false,
    })
    this.setData({
      answer:inputval
    })
    //inputval 是确认按钮后回调的值  这个值自己引入到对应的位置赋值即可
    
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

  countDown: function () {
    let that = this;
    let countDownNum = that.data.countDownNum;//获取倒计时初始值
    //如果将定时器设置在外面，那么用户就看不到countDownNum的数值动态变化，所以要把定时器存进data里面
    that.setData({
      timer: setInterval(function () {//这里把setInterval赋值给变量名为timer的变量
        //每隔一秒countDownNum就减一，实现同步
        countDownNum--;
        //然后把countDownNum存进data，好让用户知道时间在倒计着
        that.setData({
          countDownNum: countDownNum
        })
        //在倒计时还未到0时，这中间可以做其他的事情，按项目需求来
        if (countDownNum == 0) {
          //这里特别要注意，计时器是始终一直在走的，如果你的时间为0，那么就要关掉定时器！不然相当耗性能
          //因为timer是存在data里面的，所以在关掉时，也要在data里取出后再关闭
          clearInterval(that.data.timer);
          //关闭定时器之后，可作其他处理codes go here
        }
      }, 1000)
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.countDown();
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