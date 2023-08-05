// pages/wifi/wifi.js
Page({
  data: {
    startError: '',//初始化错误提示
    wifiListError: false, //wifi列表错误显示开关
    wifiListErrorInfo: '',//wifi列表错误详细
    system: '', //版本号
    platform: '', //系统 android
    ssid: 'zlq_r7800_5G',//wifi帐号(必填)
    pass: '88888888',//无线网密码(必填)
    bssid: '',//设备号 自动获取
    endError: ''//连接最后的提示
  },
  onLoad: function (options) {
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
    
  } 
 
 

})