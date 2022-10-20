<template>
  <div>
    <div class="news-item">
      <router-link :to="{name:'newsDetail', params: {id: newsId}}">
        <van-image :src="cover | imageShow" fit="cover" />
        <div class="item-right">
          <div class="title">{{title}}</div>
          <div class="desc van-multi-ellipsis--l2">
            {{desc}}
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { imageShow } from '@/utils/filters.js'
export default {
  name: 'news-item',
  props: {
    newsId: {
      type: Number,
      required: true
    },
    cover: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  },
  filters: {
    imageShow
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

    /deep/ img {
      width: (60/@rootSize) ;
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
