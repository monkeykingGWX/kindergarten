<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <van-tabbar route fixed placeholder>
      <van-tabbar-item replace :to="{name: 'index'}" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace :to="{name: 'news', params: {active:2}}" icon="flower-o">活动</van-tabbar-item>
      <van-tabbar-item replace :to="{name: 'user'}" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'tabbar'
}
</script>
