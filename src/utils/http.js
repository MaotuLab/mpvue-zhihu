const http =(url,data,method)=>
    new Promise((resolve,reject)=>{
        wx.request({
            url: url, 
            data: data,
            method:method,
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
              if(res.statusCode===200){
                resolve(res.data)
              }else{
                reject(res.data)
              }
            },
            fail:function(err){
                reject(err)
            }
          })
    })


export default{http}