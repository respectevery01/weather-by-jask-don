// 引入openweather-apis模块
const weather = require('openweather-apis');

// 设置语言为中文
weather.setLang('zh');

// 设置APPID，你需要在[6](http://openweathermap.org/register)注册一个
weather.setAPPID('你的APPID');

// 设置单位为摄氏度
weather.setUnits('metric');

// 设置城市为河南省郑州市新郑市
weather.setCity('河南省郑州市新郑市');

// 获取当前的天气数据
weather.getAllWeather(function(err, data){
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
