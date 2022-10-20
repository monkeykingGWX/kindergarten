<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :immediate-check="false"
      :offset="200"
      @load="onLoad"
    >
      <news-item v-for="item of list"
      :key="item.newsId"
      :newsId="item.newsId"
      :cover="item.newsCover"
      :title="item.title"
      :desc="item.msg"/>
    </van-list>
  </div>
</template>

<script>
import { getNewsList } from '@/api/news'
import NewsItem from '@/components/NewsItem.vue'

export default {
  name: 'news-list',
  props: {
    cateId: {
      type: Number,
      required: true
    }
  },
  components: {
    NewsItem
  },
  data () {
    return {
      loading: false,
      finished: false,
      params: {
        pageSize: 9,
        pageNum: 1
      },
      list: []
    }
  },
  created () {
    this.params.cateId = this.cateId
    this.getNewsList()
  },
  methods: {
    onLoad () {
      this.getNewsList()
    },
    async getNewsList () {
      this.loading = true
      const { data } = await getNewsList(this.params)
      this.list.push(...data)

      if (data.length < this.params.pageSize) {
        this.finished = true
      } else {
        this.params.pageNum++
      }
      this.loading = false
    }
  }
}
</script>
