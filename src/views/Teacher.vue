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
        :immediate-check="false"
        @load="onLoad">
        <teacher-item v-for="item of list"
          :key="item.teacherId"
          :face="item.face"
          :name="item.name"
          :title="item.position"
          :intro="item.introduce"
          >
        </teacher-item>
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
        pageSize: 8,
        pageNum: 1
      },
      list: [],
      loading: false,
      finished: false
    }
  },
  beforeRouteLeave (to, from, next) {
    from.meta.top = window.scrollY
    next()
  },
  created () {
    this.getTeachers()
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onLoad () {
      this.getTeachers()
    },
    async getTeachers () {
      this.loading = true
      const { data } = await getTeachers(this.params)
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
