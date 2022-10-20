<template>
  <div>
    <van-nav-bar
      title="课程安排"
      left-arrow
      fixed
      placeholder
      @click-left="onClickLeft"
    />

    <div class="course" v-html="course"></div>
  </div>
</template>

<script>
import { getCourse } from '@/api/others'

export default {
  name: 'course',
  data () {
    return {
      course: null
    }
  },
  created () {
    this.getCourse()
  },
  beforeRouteLeave (to, from, next) {
    from.meta.top = window.scrollY
    next()
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    async getCourse () {
      const { data } = await getCourse()
      this.course = data.content
    }
  }
}
</script>

<style lang="less" scoped>
@rootSize: 3.75vw;
.course{
  background-color: #fff;
  padding: (20/@rootSize);
  /deep/ p{
    line-height: 1.6;
    margin:(10/@rootSize) 0;
  }
}

</style>
