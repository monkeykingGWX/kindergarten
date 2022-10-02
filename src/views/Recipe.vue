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
      <div class="recipe-item">
        <div class="title">周一食谱</div>
        <div class="food">
          <p><b>早餐</b></p>
          <p>牛奶 鸡蛋 面包</p>
          <p><b>中餐</b></p>
          <p>米饭 红烧肉 红烧带鱼 蒸蛋 西红柿汤</p>
          <p><b>下午</b></p>
          <p>饼干 奶茶</p>
        </div>
      </div>
      <div class="recipe-item">
        <div class="title">周二食谱</div>
        <div class="food">
          <p><b>早餐</b></p>
          <p>牛奶 鸡蛋 面包</p>
          <p><b>中餐</b></p>
          <p>米饭 红烧肉 红烧带鱼 蒸蛋 西红柿汤</p>
          <p><b>下午</b></p>
          <p>饼干 奶茶</p>
        </div>
      </div>
      <div class="recipe-item">
        <div class="title">周三食谱</div>
        <div class="food">
          <p><b>早餐</b></p>
          <p>牛奶 鸡蛋 面包</p>
          <p><b>中餐</b></p>
          <p>米饭 红烧肉 红烧带鱼 蒸蛋 西红柿汤</p>
          <p><b>下午</b></p>
          <p>饼干 奶茶</p>
        </div>
      </div>
      <div class="recipe-item">
        <div class="title">周四食谱</div>
        <div class="food">
          <p><b>早餐</b></p>
          <p>牛奶 鸡蛋 面包</p>
          <p><b>中餐</b></p>
          <p>米饭 红烧肉 红烧带鱼 蒸蛋 西红柿汤</p>
          <p><b>下午</b></p>
          <p>饼干 奶茶</p>
        </div>
      </div>
      <div class="recipe-item">
        <div class="title">周五食谱</div>
        <div class="food">
          <p><b>早餐</b></p>
          <p>牛奶 鸡蛋 面包</p>
          <p><b>中餐</b></p>
          <p>米饭 红烧肉 红烧带鱼 蒸蛋 西红柿汤</p>
          <p><b>下午</b></p>
          <p>饼干 奶茶</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recipe',
  methods: {
    onClickLeft () {
      this.$router.go(-1)
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
      p{
        margin: (8/@rootSize) 0;
        line-height: 1.6;
      }
    }
  }
}
</style>
