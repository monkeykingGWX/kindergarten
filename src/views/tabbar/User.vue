<template>
  <div>
    <div class="user-header">
      <img class="banner" src="@/assets/image/left-head-all.png" />
      <div class="userinfo">
        <div class="flex">
          <img class="face" src="@/assets/image/default-face.png" />
          <div class="text">
            <p class="name">桂琳琅</p>
            <p>3岁 女</p>
          </div>
        </div>
      </div>
    </div>
    <div class="user-nav">
      <router-link :to="{name:'userInfo'}" class="user-nav-item">
        <img src="@/assets/image/left-user-dot.png" class="left-icon" />
        <span>宝宝信息</span>
        <img src="@/assets/image/right.png" class="right" />
      </router-link>
      <router-link :to="{name:'userApply'}" class="user-nav-item" >
        <img src="@/assets/image/left-user-dot.png" class="left-icon" />
        <span>我要报名</span>
        <img src="@/assets/image/right.png" class="right" />
      </router-link>
      <router-link :to="{name:'userComment'}" class="user-nav-item" >
        <img src="@/assets/image/left-user-dot.png" class="left-icon" />
        <span>我的评论</span>
        <img src="@/assets/image/right.png" class="right" />
      </router-link>
      <div class="logout">
        <van-button type="warning" round block >退出登陆</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user'
}
</script>

<style lang="less" scoped>
@rootSize: 3.75vw;
.user-header {
  background-color: #fff;
  position: relative;
  img.banner {
    width: 100%;
  }
  .userinfo {
    position: absolute;
    width: 100%;
    top: 40px;
    .flex {
      display: flex;
      align-items: center;
      justify-content: center;
      .face {
        width: (60 / @rootSize);
        height: (60 / @rootSize);
        margin-right: 8px;
      }
      .text {
        color: #eee;
        .name {
          font-size: (17 / @rootSize);
        }
      }
    }
  }
}
.user-nav {
    background-color: #fff;
    padding: 4vw;
    .user-nav-item {
        display: flex;
        align-items: center;
        padding: 3.2vw 0 3.2vw;
        border-bottom: 1px solid rgba(51, 51, 51, 0.08);

        .left-icon {
            width: 2.66666667vw;
            height: 2.66666667vw;
            margin-right: 2.13333333vw;
        }
        span {
            flex: 1;
            color: #6d6d72;
            font-size: 4.26666667vw;
        }
        .right {
            width: 5.33333333vw;
            height: 5.33333333vw;
        }
    }
    .logout{
      margin:40px 0 10px;
    }
}
</style>
