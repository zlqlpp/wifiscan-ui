// pages/create/create.js
const app = getApp()
Page({
 
  data:{
    hotelName:'',
    wifiName:'',
    wifiPwd:''
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);

     app.call({
      path:'/wifiscan/addWifi',
      method:'post',
      data:e.detail.value
    }).then((result) => {
      console.log("result：", result);})
    
      
     
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})