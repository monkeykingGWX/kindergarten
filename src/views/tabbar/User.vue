<template>
  <div>
    <div class="user-header">
      <img class="banner" src="@/assets/image/left-head-all.png" />
      <div class="userinfo">
        <div v-if="isLogin == true" class="flex">
          <img v-if="userInfo.face" class="face" :src="userInfo.face | imageShow" />
          <img v-else class="face" src="@/assets/image/default-face.png" />
          <div class="text">
            <p class="name">{{userInfo.nikeName ? userInfo.nikeName : '无名'}}</p>
            <p>{{age}}岁 {{sex}}</p>
          </div>
        </div>
        <div v-else class="flex">
          <img class="face" src="@/assets/image/default-face.png" />
          <div class="text">
            <p class="name">请先登录</p>
          </div>
        </div>
      </div>
    </div>
    <div class="user-nav">
      <div @click="loginGo({name:'userInfo'})" class="user-nav-item">
        <img src="@/assets/image/left-user-dot.png" class="left-icon" />
        <span>宝宝信息</span>
        <img src="@/assets/image/right.png" class="right" />
      </div>
      <div @click="loginGo({name:'userApply'})" class="user-nav-item" >
        <img src="@/assets/image/left-user-dot.png" class="left-icon" />
        <span>我要报名</span>
        <img src="@/assets/image/right.png" class="right" />
      </div>
      <div @click="loginGo({name:'userComment'})" class="user-nav-item" >
        <img src="@/assets/image/left-user-dot.png" class="left-icon" />
        <span>我的评论</span>
        <img src="@/assets/image/right.png" class="right" />
      </div>
      <div class="logout">
        <van-button v-if="isLogin" type="warning" round block @click="logout">退出登陆</van-button>
        <van-button v-else type="warning" round block @click="go({name: 'login'})">登陆</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user'
import myMixin from '@/mixin/myMixin'
import { getYear } from '@/utils/date'
import { imageShow } from '@/utils/filters'

export default {
  name: 'user',
  mixins: [myMixin],
  data () {
    return {
      isLogin: false,
      userInfo: null
    }
  },
  async activated () {
    // 获取vuex中的jwtToken
    const jwtToken = this.$store.state.jwtToken
    // 判断是否已过期
    const expire = jwtToken.expire
    if (expire > Date.now()) {
      // 获取用户信息
      this.getUserInfo()
    }
  },
  methods: {
    async getUserInfo () {
      const { data } = await getUserInfo()
      if (data) {
        this.isLogin = true
        this.userInfo = data
      }
    },
    logout () {
      this.$dialog.confirm({
        message: '确定退出登陆'
      }).then(() => {
        this.$store.commit('clearToken')
        this.isLogin = false
        this.$toast.success('退出登陆成功')
      }).catch(() => {
        // do nothing
      })
    }
  },
  computed: {
    age: function () {
      if (this.userInfo.birthday) {
        const birth = new Date(this.userInfo.birthday)
        const now = new Date()
        const age = getYear(now) - getYear(birth)
        return age > 0 ? age : 0
      } else {
        return 0
      }
    },
    sex: function () {
      if (this.userInfo.gender === 1) {
        return '男'
      } else if (this.userInfo.gender === 2) {
        return '女'
      } else {
        return '未知'
      }
    }
  },
  filters: {
    imageShow
  }
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
        border-radius: 50%;
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
