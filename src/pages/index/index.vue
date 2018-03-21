<template>
  <div class="container" >
    <swiper v-if="top_stories" class="banner" indicator-dots indicator-color indicator-active-color="#fff" autoplay>
      <block v-for="(item,indexs) in top_stories" :key='indexs'>
        <swiper-item>
          <image :src="item.image" class="swpier_img" />
          <div class="banner_title">{{item.title}}</div>
        </swiper-item>
      </block>
    </swiper>
    <div class="newsList">
      <div class="listContent" v-for="item in Models " :key="item.date">
        <div class="data_item">{{item.date}}</div>
        <div class="listItem" v-for="(items,indexes) in item.stories " :key="indexes" id="items.id">
          <div class="title">
            <div>{{items.title}}</div>
          </div>
          <div class="images">
            <img :src="items.images[0]" alt="" class="list_img">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import  http  from '@/utils/http';
import api from '@/utils/api';
import { GetPastTime } from '@/utils/index'
import Servers from "@/server/zhihu"


export default {
  data () {
    return {

      Models:[],
      top_stories:[],
      currentDate:'',
      latestDate:'',
      pastDate:0,
    }
  },

  components: {
    
  },

  methods: {
    latest(){
      Servers.query('').then(res=>{
        this.Models.push(res);
        this.latestDate=res.date;
        this.top_stories=res.top_stories;
      }).catch(err=>{
        consoe.log(err)
      })
    },
    getHisory(date){
      wx.showLoading()
      Servers.history(date).then(res=>{
        this.Models.push(res)
        this.pastDate--;
        wx.hideLoading()
      })
    },
    setting(){
      wx.setNavigationBarTitle({
        title: '今日新闻',
      })
    },


  },
  


  created () {
    // 调用应用实例的方法获取全局数据
    this.setting();
    this.latest();
  },
  onshow(){
    console.log("onshow")

  },
  onReachBottom(){
    let past = this.pastDate-1;
    let pastDate=GetPastTime(past);
    this.getHisory(pastDate)
},
}
</script >

<style  scoped>
.banner{
  width: 100%;
  height: 280px;
  position: relative;

}
.swpier_img{
  width: 100%;
  height: 100%;
}
.banner_title{
  position: absolute;
  bottom: 40px;
  margin-left:20px;
  color: #fff;
  font-size: 24px;
}
.listItem{
  display: flex;
  margin-left: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #dedede;

}
.data_item{
  text-align: center;
  background-color: #3f8dd0;
  color: #fff;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
}
.listItem .title{
  flex: 1;
  font-size: 18px;
  padding-right: 10px;
}
.listItem .images{
  width: 100px;
  height: 80px;
}
.list_img{
  width: 100px;
  height: 80px;
}
</style>
