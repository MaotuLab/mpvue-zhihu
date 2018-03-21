function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function GetPastTime  (dayCount){
  //取当前时间，格式为,yyyy-mm-dd hh:mm:ss
   if(null == dayCount){  
       dayCount = 0;  
   }  
     var dd = new Date();  
     dd.setDate(dd.getDate()+dayCount);//设置日期  
     var y = dd.getFullYear();  
     var m = dd.getMonth()+1;//获取当前月份的日期  
     if(m<10){
       m="0"+m
     }
     var d = dd.getDate();  
     console.log(d)
     return y+''+m+''+d;  
 }

