// pages/main/main.js
const app = getApp()
Page({
  GoToCreate: function (event) {       /*跳转到create页面*/
    wx.navigateTo({
      url: "../create/create",   /*指定跳转到create界面*/
    })
  },
  GoToMine: function (event) {       /*跳转到mine页面*/
    wx.navigateTo({
      url: "../test/test.wxml",   /*指定跳转到mine界面*/
    })
  },
  onLoad: function (options) {
    console.log('ttttttttt')
    wx.startWifi({
      success (res) {
        console.log(res.errMsg);
       
          wx.connectWifi({
            SSID: 'zyeahq_5G',
            password: 'yangyang117',
            success (res) {
              console.log(res.errMsg);
            },
            fail: function(res){
              console.log(res.errMsg, 'wifi初始化失败')
            }
          }); 
      },
      fail: function(res){
        console.log(res.errMsg, 'wifi初始化失败')
      }
    }); 

// 必须是在用户已经授权的情况下调用
wx.getUserInfo({
  success: function(res) {
    var userInfo = res.userInfo
    var nickName = userInfo.nickName
    var avatarUrl = userInfo.avatarUrl
    var gender = userInfo.gender //性别 0：未知、1：男、2：女
    var province = userInfo.province
    var city = userInfo.city
    var country = userInfo.country
    console.log(res);
  }
});

const res =   app.call({
  path:'/wifiscan/findAll'

   
});
res.then((result) => {
  console.log("result：", result);})

  } 
}



)