<template>
  <div>
    <div class="panel">
      <p>{{title}} <router-link :to="to"><van-icon name="arrow" color="#999" /></router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'panel',
  props: {
    title: {
      type: String,
      default: ''
    },
    to: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
@rootSize: 3.75vw;
.panel {
  background-color: #fff;
  p{
    margin-left:(20/@rootSize);
    color:#999;
    font-size:(15/@rootSize);
    padding:(10/@rootSize) (15/@rootSize) (10/@rootSize) 0;
    border-bottom: 1px solid #f3f4f6;
    position: relative;

    a{
      position: absolute;
      right:(15/@rootSize);
      top:(12/@rootSize);
    }
  }
}
</style>
