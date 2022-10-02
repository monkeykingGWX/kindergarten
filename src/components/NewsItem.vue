<template>
  <div>
    <div class="news-item">
      <router-link :to="{name:'newsDetail'}">
        <img src="@/assets/image/ch1.jpg" />
        <div class="item-right">
          <div class="title">典型儿童语言障碍案例分析指导</div>
          <div class="desc van-multi-ellipsis--l2">
            寓教于乐，多予鼓励：充分利用生活中的素材，让被测试者充分接近生活，在玩中学，在生活过程中得到训练，减少直接的学习和训练给学生带来的疲劳和厌倦。</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news-item',
  props: {
    to: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
@rootSize: 3.75vw;
.news-item {
  padding: (15/@rootSize) (20/@rootSize) (15/@rootSize) 0;
  margin-left: (20/@rootSize);
  border-bottom: 1px solid #f3f4f6;

  a {
    display: flex;

    img {
      width: (60/@rootSize);
      height: (60/@rootSize);
      margin-right: (8/@rootSize);
    }

    .title {
      color: #333;
    }

    .desc {
      color: #999;
      font-size: (13/@rootSize);
    }
  }
}
</style>
