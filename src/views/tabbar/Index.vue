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
        <div class="content" @click="go({name: 'newsDetail', params:{id: topNews.newsId}})">
          <div class="title">{{topNews.title}}</div>
          <div class="desc van-multi-ellipsis--l3">{{topNews.msg}}</div>
        </div>
      </div>

      <!-- 儿童教育 -->
      <div class="news-list">
        <panel title="儿童教育" :to="{name: 'news', params: {active: 1}}"></panel>
        <div class="news-content">
          <news-item v-for="item of newsList"
            :key="item.newsId"
            :newsId="item.newsId"
            :cover="item.newsCover"
            :title="item.title"
            :desc="item.msg"
            ></news-item>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getCovers } from '@/api/others.js'
import { getTopNews, getNewsList } from '@/api/news'
import { imageShow } from '@/utils/filters.js'
import myMixin from '@/mixin/myMixin'
import panel from '@/components/Panel.vue'
import newsItem from '@/components/NewsItem.vue'

export default {
  name: 'index',
  mixins: [myMixin],
  components: {
    panel,
    'news-item': newsItem
  },
  data () {
    return {
      isLoading: false,
      banners: [],
      topNews: {},
      newsList: []
    }
  },
  created () {
    this.getCoverList()
    this.getTopNews()
    this.getNewsList()
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
    async onRefresh () {
      await this.getCoverList()
      await this.getTopNews()
      this.isLoading = false
    },
    async getCoverList () {
      const response = await getCovers()
      this.banners = response.data
    },
    async getTopNews () {
      const response = await getTopNews()
      this.topNews = response.data
    },
    async getNewsList () {
      const response = await getNewsList({
        pageSize: 8,
        pageNum: 1,
        cateId: 3
      })

      this.newsList = response.data
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
