<template>
  <div>
    <van-nav-bar
      title="校园简介"
      left-arrow
      fixed
      placeholder
      @click-left="onClickLeft"
    />

    <div class="brief">
      <img :src="data.cover | imageShow" />
      <div class="content">
        <h3><b>{{data.name}}</b></h3>
        <div class="desc" v-html="data.desc"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSchoolInfo } from '@/api/others'
import { imageShow } from '@/utils/filters.js'

export default {
  name: 'brief',
  data () {
    return {
      data: []
    }
  },
  created () {
    this.getSchoolInfo()
  },
  beforeRouteLeave (to, from, next) {
    from.meta.top = window.scrollY
    next()
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    async getSchoolInfo () {
      const { data } = await getSchoolInfo()
      this.data = data
    }
  },
  filters: {
    imageShow
  }
}
</script>

<style lang="less" scoped>
@rootSize: 3.75vw;
.brief{
  img {
    width:100%
  }
  .content {
    padding:(15/@rootSize);
    background-color: #fff;
    margin-bottom:30px;
    h3{
      text-align: center;
    }
    p{
      margin: (8/@rootSize) 0;
      line-height: 1.6;
    }
  }
}
</style>
