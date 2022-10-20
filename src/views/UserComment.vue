<template>
  <div>
    <van-nav-bar
      title="我的评论"
      left-arrow
      fixed
      placeholder
      @click-left="onClickLeft"
    />
    <div class="list">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          :immediate-check="false"
          @load="getUserComments">
          <div v-for="item of list" :key="item.commentId" class="item">
            <router-link :to="{name: 'newsDetail', params: {id: item.newsId}}">
              <p class="msg">{{item.msg}}</p>
              <p class="pubdate">{{item.createTime}}</p>
            </router-link>
          </div>
        </van-list>
    </div>
  </div>
</template>

<script>
import { userComment } from '@/api/user'

export default {
  name: 'user-comment',
  data () {
    return {
      loading: false,
      finished: false,
      params: {
        pageNum: 1,
        pageSize: 10
      },
      list: []
    }
  },
  created () {
    this.getUserComments()
  },
  beforeRouteLeave (to, from, next) {
    from.meta.top = window.scrollY
    next()
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    async getUserComments () {
      this.loading = true
      const { data } = await userComment(this.params)
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

<style lang="less" scoped>
@rootSize: 3.75vw;
.list{
  background: #fff;
  padding:0 (15/@rootSize);
  .item{
    padding:(20/@rootSize) 0;
    border-bottom: 1px solid rgba(51, 51, 51, 0.08);
    .msg {
      font-size:(17/@rootSize);
      color:#333;
    }
    .pubdate{
      text-align: right;
      color:#999;
      font-size:(14/@rootSize);
      margin-top:7px;
    }
  }
}
</style>
