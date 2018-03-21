import http from "@/utils/http.js";
import api from "@/utils/api.js";


const query=(data)=>{
    return new Promise((resolve,reject)=>{
        http.http(api.api.latest,'','GET').then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err)
        })
    })
}

const history=(data)=>{
    return new Promise((resolve,reject)=>{
        http.http(api.api.history+data,'','GET').then(res=>{
            resolve(res);

        }).catch(err=>{
            reject(err)
        })
    })


}



export default {query,history}