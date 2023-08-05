// pages/test/test.js

Page({
  data: {
    shopName: ""
  },

  handleInput(event) {
    this.setData({
      shopName: event.detail.value
    });
  }
});
