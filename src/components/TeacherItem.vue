<template>
  <div>
    <div class="teacher-item" @click="showDesc">
        <img :src="face|imageShow" />
        <div class="teacher-item-right">
          <div class="title">{{name}} <span>{{title}}</span></div>
          <div class="desc van-multi-ellipsis--l3">{{intro}}</div>
        </div>
    </div>
  </div>
</template>

<script>
import { imageShow } from '@/utils/filters.js'
import { Dialog } from 'vant'

export default {
  name: 'teacher-item',
  props: {
    face: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    intro: {
      type: String,
      require: true
    }
  },
  methods: {
    showDesc () {
      Dialog({
        showConfirmButton: false,
        closeOnClickOverlay: true,
        message: this.intro
      })
    }
  },
  filters: {
    imageShow
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
