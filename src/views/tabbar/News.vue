<template>
  <div>
    <van-tabs v-model="tabIndex" sticky :before-change="beforeTabsChange" @change="onTabsChange">
      <van-tab v-for="item of cates" :key="item.cateId" :title="item.cateName">
        <div class="news">
          <news-list :cateId="item.cateId"></news-list>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getAllNewsCate } from '@/api/newsCate'
import NewsList from '@/components/NewsList.vue'

const nameToTop = {}

export default {
  name: 'news',
  components: {
    'news-list': NewsList
  },
  data () {
    return {
      tabIndex: 0,
      cates: []
    }
  },
  beforeRouteLeave (to, from, next) {
    from.meta.top = window.scrollY
    next()
  },
  async created () {
    this.tabIndex = this.$route.params.active
    await this.getAllNewsCate()
  },
  methods: {
    async getAllNewsCate () {
      const { data } = await getAllNewsCate()
      this.cates = data
    },
    // tabs 发生切换之前，触发此方法
    beforeTabsChange () {
      nameToTop[this.tabIndex] = window.scrollY

      // return true 表示允许进行标签页的切换
      return true
    },
    onTabsChange () {
      this.$nextTick(() => {
        const y = nameToTop[this.tabIndex]
        window.scrollTo(0, y || 0)
      })
    }
  },
  watch: {
    $route: function (to, from) {
      if (this.$route.params.active) {
        this.tabIndex = this.$route.params.active
      }
    }
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
