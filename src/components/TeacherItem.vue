<template>
  <div>
    <div class="teacher-item" @click="showDesc">
        <img src="@/assets/image/ch8.jpg" />
        <div class="teacher-item-right">
          <div class="title">刘老师 <span>园长</span></div>
          <div class="desc van-multi-ellipsis--l3">从事幼儿教育36年，先后在西安交通大学医学院第一附属医院幼儿园、西安海伦国际幼儿园、品格教育集团任教。拥有26年幼儿园园长管理经验，在教育教学管理工作中，探求教学创新技能，致力于教育管理理念的更新，被授予西安市“优秀教师”、雁塔区“管理育人标兵”等荣誉称号。</div>
        </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant'

export default {
  name: 'teacher-item',
  methods: {
    showDesc () {
      Dialog({
        showConfirmButton: false,
        closeOnClickOverlay: true,
        message: '从事幼儿教育36年，先后在西安交通大学医学院第一附属医院幼儿园、西安海伦国际幼儿园、品格教育集团任教。拥有26年幼儿园园长管理经验，在教育教学管理工作中，探求教学创新技能，致力于教育管理理念的更新，被授予西安市“优秀教师”、雁塔区“管理育人标兵”等荣誉称号。'
      })
    }
  }
}
</script>

<style lang="less" scoped>
@rootSize: 3.75vw;
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
</style>
