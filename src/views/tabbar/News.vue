<template>
  <div>
    <van-tabs v-model="tabIndex" sticky>
      <van-tab title="公告">
        <div class="news">
          <news-item v-for="item of list[0]" :key="item" />
        </div>
      </van-tab>
      <van-tab title="活动">
        <div class="news">
          <news-item v-for="item of list[1]" :key="item" />
        </div>
      </van-tab>
      <van-tab title="儿童教育">
        <div class="news">
          <news-item v-for="item of list[2]" :key="item" />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NewsItemVue from '@/components/NewsItem.vue'
export default {
  name: 'news',
  components: {
    'news-item': NewsItemVue
  },
  data () {
    return {
      tabIndex: 0,
      list: [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [1, 2, 3, 4, 5],
        [1, 2, 3]
      ]
    }
  },
  created () {
    this.tabIndex = this.$route.params.active
  }
}
</script>

<style lang="less" scoped>
@rootSize: 3.75vw;
.news{
  margin-top: (10/@rootSize);
  margin-bottom: 30px;
  background-color: #fff;
}
</style>
