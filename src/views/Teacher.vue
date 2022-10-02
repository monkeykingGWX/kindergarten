<template>
  <div>
    <van-nav-bar
      title="教师团队"
      left-arrow
      fixed
      placeholder
      @click-left="onClickLeft"
    />

    <!-- 教师团队 -->
    <div class="teacher">
      <teacher-item v-for="item of [1,2,3,4,5,6,7,8,9]" :key="item"></teacher-item>
    </div>
  </div>
</template>

<script>
import teachItem from '@/components/TeacherItem.vue'

export default {
  name: 'teacher',
  components: {
    'teacher-item': teachItem
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
@rootSize: 3.75vw;
.teacher{
  background-color: #fff;
  padding-left:(15/@rootSize);
  padding-bottom: 30px;

  .teacher-item {
    display: flex;
    padding: (15/@rootSize) (15/@rootSize) (15/@rootSize) 0;
    border-bottom: 1px solid #f3f4f6;

    img{
      width:(80/@rootSize);
      height:(80/@rootSize);
      border-radius: 50%;
      margin-right:(10/@rootSize);
    }
    .title{
      font-size: (17/@rootSize);
      color:#333;

      span {
        color:#999;
        font-size: (14/@rootSize);
      }
    }
    .desc{
      font-size: (13/@rootSize);
      color:#999;
    }
  }
}
</style>
