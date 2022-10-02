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
      <img src="@/assets/image/about.jpg" />
      <div class="content">
        <p><b>西交康桥临渭示范幼儿园</b></p>
        <p>西交康桥教育集团（陕西西交康桥教育科技有限公司）是西安交通大学资产经营有限公司为了响应国家创新驱动发展战略，发起设立的一个新型教育投资管理平台。植根西安交通大学120年的优良传统，以交大先进的教育教学理念、优秀的基础教育品牌和独特教育资源优势，与渭南市政府合作，共同打造西交康桥临渭示范幼儿园。幼儿园占地面积8.5亩，建筑面积约7000平方米，以“高起点高品质办学、打造高水平的优质园”为目标；依托西安交大基础教学办学经验，引进意大利先进的瑞吉欧国际化幼儿教育理念，聘请国际知名设计师打造独特的最适合孩子成长的乐园</p>
        <p>礼、乐、射、御、书、数，古之六艺，今为西交康桥课程纲领；</p>
        <p>看、听、触、闻、尝、思，今之六感，现为西交康桥教育方法。</p>
        <p>西交康桥临渭示范幼儿园作为一所国际化幼儿园，特别聘请高素质的中外专家及教师团队，以国学为根本，以六感促六艺，同时邀请家长、老师、专家一起来帮助孩子积淀身体财富、心灵财富、思想和精神财富，培养能感受、能思考、能表达、能作为、回归本真面貌、发现自我天赋的孩子，支持孩子成为拥有中国灵魂的世界公民。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'brief',
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
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
    p{
      margin: (8/@rootSize) 0;
      line-height: 1.6;
    }
  }
}
</style>
