<template>
  <div>
    <van-nav-bar
      title="详情"
      left-arrow
      fixed
      placeholder
      @click-left="onClickLeft"
    />
    <div class="news-detail" v-if="newsDetail">
      <article ref="article">
        <h1>{{newsDetail.title}}</h1>
        <div class="pubdate">
          <div>文章所属：{{newsDetail.cateName}}</div>
          <div>发布于 <span>{{newsDetail.createTime | dateFormat}}</span></div>
        </div>
        <div class="content"  v-html="newsDetail.newsContent"></div>
      </article>

      <div class="comments">
        <div v-if="isLogin" class="comment-send">
          <div class="comments-submit">
            <img :src="userInfo.face | imageShow" class="user-face" />
            <textarea v-model.trim="comment" placeholder="说说你的看法"></textarea>
          </div>
          <button type="button" class="send-btn" @click="sendComment">发表</button>
        </div>
        <div v-else class="comment-send">
          <div class="comments-submit">
            <img src="@/assets/image/default-face.png" class="user-face" />
            <textarea placeholder="说说你的看法" @click="go({name:'login'})"></textarea>
          </div>
          <button type="button" class="send-btn">发表</button>
        </div>
        <div class="comments-list">
          <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          :immediate-check="false"
          @load="nextPage">
            <div v-for="item of list" :key="item.commentId" class="comments-item">
              <div class="comments-top">
                <img
                  :src="item.face | imageShow"
                />
                <span class="nickname">{{item.babyName}}</span> <span class="date">{{item.createTime | dateFormat}}</span>
              </div>
              <div class="comment-content">
                {{item.msg}}
              </div>
            </div>
          </van-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserInfo, userSendComment } from '@/api/user'
import { getNewsDetail } from '@/api/news'
import { getCommentOfNews } from '@/api/others'
import { dateFormat, imageShow } from '@/utils/filters'
import myMixin from '@/mixin/myMixin'

export default {
  name: 'news-detail',
  mixins: [myMixin],
  props: {
    id: {
      required: true
    }
  },
  data () {
    return {
      newsDetail: null,
      isLogin: false,
      userInfo: null,
      comment: '', // 评论内容
      params: {
        pageNum: 1,
        pageSize: 6
      },
      loading: false,
      finished: false,
      list: []
    }
  },
  activated () {
    // 获取vuex中的jwtToken
    const jwtToken = this.$store.state.jwtToken
    // 判断是否已过期
    const expire = jwtToken.expire
    if (expire > Date.now()) {
      // 获取用户信息
      this.getUserInfo()
    }
    this.params = {
      pageNum: 1,
      pageSize: 6
    }
    this.list = []
    this.getNewsDetail(this.id)
    this.getCommentOfNews(this.id)
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    async getNewsDetail (id) {
      const { data } = await getNewsDetail(id)
      this.newsDetail = data
      this.$nextTick(() => { // TODO 该代码容易造成死循环
        const imgList = this.$refs.article.querySelectorAll('img')
        for (const img of imgList) {
          img.onerror = function () {
            const src = this.src

            if (src.includes(':8888')) {
              this.src = src.replace(':8888', ':8080')
            }
          }
        }
      })
    },
    async getCommentOfNews (id, reflash = false) {
      this.loading = true

      if (reflash) {
        this.params.pageNum = 1
      }

      const { data } = await getCommentOfNews(id, this.params)

      if (reflash) {
        this.list = data
      } else {
        this.list.push(...data)
      }

      if (data.length < this.params.pageSize) {
        this.finished = true
      } else {
        this.params.pageNum++
      }

      this.loading = false
    },
    async getUserInfo () {
      const { data } = await getUserInfo()
      if (data) {
        this.isLogin = true
        this.userInfo = data
      }
    },
    async sendComment () {
      if (!this.comment) {
        this.$toast.fail({
          message: '请填写评论内容',
          overlay: true
        })
      } else {
        await userSendComment({ msg: this.comment, newsId: this.id })
        this.comment = ''
        this.getCommentOfNews(this.id, true)

        this.$toast.success({
          message: '发布成功'
        })
      }
    },
    nextPage () {
      this.getCommentOfNews(this.id)
    }
  },
  filters: {
    dateFormat,
    imageShow
  }
}
</script>

<style lang="less" scoped>
@rootSize: 3.75vw;
article {
  padding: (15 / @rootSize);
  background-color: #fff;

  .pubdate {
    display: flex;
    color: #999;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  h1 {
    margin: 0;
    font-size: (22 / @rootSize);
    margin-bottom: (10 / @rootSize);
  }
  /deep/ img {
    display: block;
    max-width: 100%;
  }
  /deep/ p {
    margin: (8 / @rootSize) 0;
    line-height: 1.5;
  }
}
.comments {
  margin-top: 20px;
  margin-bottom: 30px;
  background-color: #fff;
  .comments-submit {
    display: flex;
    padding: 15px 4vw 0;
    margin-top: 5.33333333vw;
    .user-face {
      width: 10.66666667vw;
      height: 10.66666667vw;
      border-radius: 50%;
    }
    textarea {
      flex: 1;
      margin-left: 2.66666667vw;
      resize: none;
      height: 26.66666667vw;
      font-size: 3.73333333vw;
      border: 1px solid #ddd;
      outline: none;
      padding: 1.33333333vw;
      border-radius: 5px;
    }
  }
  .comment-send {
    position: relative;
    margin-bottom: 5.33333333vw;
  }
  .comment-send .send-btn {
    position: absolute;
    right: 4vw;
    bottom: -9.6vw;
    border-radius: 6px;
    padding: 1.33333333vw 4vw;
    border: none;
    background-color: #f97711;
    color: #fff;
  }
  .comments-list {
    padding: 0 4vw;
    .comments-item {
      padding: 3.2vw 0;
      border-bottom: 1px solid #eee;

      .comments-top {
        display: flex;
        align-items: center;
        img {
            width: 10.66666667vw;
            height: 10.66666667vw;
            border-radius: 50%;
            margin-right: 4vw;
        }
         .nickname {
            font-size: 4.26666667vw;
            color: #3d4145;
            margin-right: 5.33333333vw;
        }
         .date {
            color: #5f646e;
            font-size: 3.46666667vw;
        }
      }

      .comment-content {
          font-size: 3.73333333vw;
          color: #3d3d3d;
          margin-top: 2.66666667vw;
      }
    }
  }
}
</style>
