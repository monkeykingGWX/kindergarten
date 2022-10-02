<template>
  <div id="index">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) of banners" :key="item.coverId" @click="banner(index)" >
          <img :src="item.coverUrl | imageShow" />
        </van-swipe-item>
      </van-swipe>

      <!-- 教师团队 -->
      <div class="item-four">
        <div class="item">
          <router-link :to="{name: 'teacher'}">
            <img src="@/assets/image/icon_nav_sz.png" />
            <p>教师团队</p>
          </router-link>
        </div>
        <div class="item">
          <router-link :to="{name: 'course'}">
            <img src="@/assets/image/icon_nav_kc.png" />
            <p>课程安排</p>
          </router-link>
        </div>
        <div class="item">
          <router-link :to="{name: 'recipe'}">
            <img src="@/assets/image/icon_nav_sp.png" />
            <p>一周食谱</p>
          </router-link>
        </div>
        <div class="item">
          <router-link :to="{name: 'brief'}">
            <img src="@/assets/image/icon_nav_hd.png" />
            <p>校园简介</p>
          </router-link>
        </div>
      </div>

      <!-- 公告 -->
      <div class="board">
        <panel title="公告" :to="{name: 'news', params: {active: 0}}"></panel>
        <div class="content">
          <div class="title">人民币汇率双破7 个人如何应对？</div>
          <div class="desc van-multi-ellipsis--l3">时隔两年多，人民币对美元汇率再度贬破“7”关口。9月16日，在岸人民币对美元汇率跌破“7”。昨日，离岸人民币对美元汇率已先破“7”。从8月15日大幅走低到今日破“7”，离岸人民币对美元汇率下跌了3.88%，人民币对美元即期汇率下跌超3.9%。</div>
        </div>
      </div>

      <!-- 儿童教育 -->
      <div class="news-list">
        <panel title="儿童教育" :to="{name: 'news', params: {active: 2}}"></panel>
        <div class="news-content">
          <news-item v-for="item of [1,2,3,4,5,6,7]" :key="item"></news-item>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import panel from '@/components/Panel.vue'
import newsItem from '@/components/NewsItem.vue'
import { getCovers } from '@/api/others.js'
import { imageShow } from '@/utils/filters.js'

export default {
  name: 'index',
  components: {
    panel,
    'news-item': newsItem
  },
  data () {
    return {
      isLoading: false,
      banners: []
    }
  },
  created () {
    this.getCoverList()
  },
  methods: {
    banner (index) {
      const target = this.banners[index]
      if (target.type === 1) {
        this.$router.push({ name: 'newsDetail', params: { newsId: target.link } })
      } else {
        location.href = target.link
      }
    },
    onRefresh () {
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    },
    async getCoverList () {
      const response = await getCovers()
      this.banners = response.data
    }
  },
  filters: {
    imageShow
  }
}
</script>

<style lang="less" scoped>
@rootSize: 3.75vw;
.my-swipe .van-swipe-item {
  color: #fff;
  text-align: center;
  img {
    width:100%;
    height: (175/@rootSize);
  }
}
.item-four {
  display: flex;
  background-color: #fff;
  .item{
    margin-top: (10/@rootSize);
    width:25%;
    text-align: center;

    img {
      width:(46/@rootSize);
      height: (46/@rootSize);
    }
    p {
      font-size:(15/@rootSize);
      margin: (8/@rootSize);
      color: #333;
    }
  }
}
.board{
  background-color: #fff;
  margin-top:(15/@rootSize);

  .content{
    padding: (20/@rootSize) (20/@rootSize) (10/@rootSize);

    .title {
      font-size: (16/@rootSize);
      margin-bottom: (5/@rootSize);
    }

    .desc {
      color:#999;
      font-size: (14/@rootSize);
    }
  }
}
.news-list{
  background-color: #fff;
  margin:(15/@rootSize) 0;
}
</style>
