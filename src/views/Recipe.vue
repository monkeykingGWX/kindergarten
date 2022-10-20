<template>
  <div>
    <van-nav-bar
      title="一周食谱"
      left-arrow
      fixed
      placeholder
      @click-left="onClickLeft"
    />

    <div class="recipe">
      <div v-for="item of list" :key="item.dietId" class="recipe-item" >
        <div class="title">{{item.title}}</div>
        <div class="food" v-html="item.dietContent"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDiets } from '@/api/others'
export default {
  name: 'recipe',
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getDiets()
  },
  beforeRouteLeave (to, from, next) {
    from.meta.top = window.scrollY
    next()
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    async getDiets () {
      const { data } = await getDiets()
      this.list = data
    }
  }
}
</script>

<style lang="less" scoped>
@rootSize: 3.75vw;
.recipe{
  margin-bottom: 30px;

  .recipe-item{
    margin-top: (15/@rootSize);
    background-color: #fff;

    .title {
      font-size:(19/@rootSize);
      color:#F08519;
      font-weight: bold;
      padding: (15/@rootSize);
      border-bottom:1px solid #d9d9d9
    }

    .food {
      padding: (15/@rootSize);
      /deep/ p{
        margin: (8/@rootSize) 0;
        line-height: 1.6;
      }
    }
  }
}
</style>
