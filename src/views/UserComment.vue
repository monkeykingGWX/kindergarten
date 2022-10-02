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
      <div class="item">
        <router-link to="">
          <p class="msg">这是我第一次评论，有点紧张，不要见外。下次我一定更加努力，谢谢大家！</p>
          <p class="pubdate">2020/01/02 12:14</p>
        </router-link>
      </div>
      <div class="item">
        <router-link to="">
          <p class="msg">这是我第一次评论，有点紧张，不要见外。下次我一定更加努力，谢谢大家！</p>
          <p class="pubdate">2020/01/02 12:14</p>
        </router-link>
      </div>
      <div class="item">
        <router-link to="">
          <p class="msg">这是我第一次评论，有点紧张，不要见外。下次我一定更加努力，谢谢大家！</p>
          <p class="pubdate">2020/01/02 12:14</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-comment',
  methods: {
    onClickLeft () {
      this.$router.go(-1)
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
