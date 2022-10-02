<template>
  <div>
    <van-nav-bar
      title="课程安排"
      left-arrow
      fixed
      placeholder
      @click-left="onClickLeft"
    />

    <div class="course">
      <p><b>07:50-08:20</b></p>
      <p>早俱乐部（清洁教室、喂养小动物、日常活动准备、师生日常交流）</p>
      <p>08:20-08:50</p>
      <p>营养早餐</p>
      <p>08:50-09:00</p>
      <p>整理，自我照料</p>
      <p>09:00-09:30</p>
      <p>主题教学、绘本故事、国学小课堂</p>
      <p>09:30-10:00</p>
      <p>分龄艺术（湿水彩、蜂蜡、戏剧、音乐、画信、手工等）</p>
      <p>10:00-10:10</p>
      <p>整理，自我照料</p>
      <p>10:10-11:00</p>
      <p>种植+室外玩耍+整理</p>
      <p>11:00-11:30</p>
      <p>英语互动、英语绘本阅读</p>
      <p>11:30-11:40</p>
      <p>手指谣+餐前准备</p>
      <p>11:40-14:20</p>
      <p>丰富午餐+餐后清理（含散步）+午休充电</p>
      <p>14:20-14:40</p>
      <p>起床，自我照料</p>
      <p>14:40-15:00</p>
      <p>午点，餐后清理</p>
      <p>15:00-15:30</p>
      <p>下午俱乐部</p>
      <p>15:30-16:40</p>
      <p>室内外自由活动+自我料理</p>
      <p>16:40-17:20</p>
      <p>餐前准备+营养晚餐</p>
      <p>17:20-17:50</p>
      <p>离园准备+离园</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'course',
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
@rootSize: 3.75vw;
.course{
  background-color: #fff;
  padding:(20/@rootSize)
}
p {
  line-height: 1.6;
  margin:5px 0;
}
</style>
