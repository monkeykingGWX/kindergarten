<template>
  <div>
    <van-nav-bar
      title="教师团队"
      left-arrow
      fixed
      placeholder
      @click-left="onClickLeft"
    ></van-nav-bar>

    <!-- 教师团队 -->
    <div class="teacher">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad">
        <teacher-item v-for="item of list" :key="item.teacherId"></teacher-item>
      </van-list>
    </div>
  </div>
</template>

<script>
import { getTeachers } from '@/api/others'
import teachItem from '@/components/TeacherItem.vue'

export default {
  name: 'teacher',
  components: {
    'teacher-item': teachItem
  },
  data () {
    return {
      params: {
        pageSize: 6,
        pageNum: 1
      },
      list: [],
      loading: false,
      finished: false
    }
  },
  created () {
    this.getTeachers()
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onLoad () {
      console.log(1111)
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    },
    async getTeachers () {
      const { data } = await getTeachers(this.params)
      this.list = data
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
