<template>
  <div class="container">
    <div class="logo">
      <img src="@/assets/image/logo.png" />
    </div>
    <div class="form" >
      <div class="item">
        <van-icon name="user-o" color="#fff" /> <input type="text" v-model.trim="loginName" autocomplete="off" placeholder="请输入用户名" />
      </div>
      <div class="item">
        <i class="iconfont" style="color:#fff">&#xe669;</i> <input type="password"  v-model.trim="loginPass" autocomplete="off" placeholder="请输入密码" />
      </div>
      <div class="item">
        <i class="iconfont" style="color:#fff">&#xe669;</i> <input type="password"  v-model.trim="repeatPass" autocomplete="off" placeholder="再次输入密码" />
      </div>
      <div class="jump">
        <div class="a" @click="replaceGo({name:'login'})" >已有账号，去登录</div>
      </div>
    </div>
    <div class="button">
      <van-button type="default" round block @click="reg">注&nbsp;&nbsp;册</van-button>
    </div>
  </div>
</template>

<script>
import myMixin from '@/mixin/myMixin'
import { userReg } from '@/api/user'

export default {
  name: 'reg',
  mixins: [myMixin],
  data () {
    return {
      loginName: null,
      loginPass: null,
      repeatPass: null
    }
  },
  methods: {
    beforeSub () {
      if (!this.loginName) {
        this.$dialog.alert({ message: '请填写登录账号' })
        return false
      }

      if (!this.loginPass) {
        this.$dialog.alert({ message: '请填写登陆密码' })
        return false
      }

      if (this.loginPass !== this.repeatPass) {
        this.$dialog.alert({ message: '两次密码输入不一致' })
        return false
      }

      return true
    },
    async reg () {
      if (this.beforeSub()) {
        await userReg({
          loginName: this.loginName,
          loginPass: this.loginPass
        })

        this.$toast.success('注册成功，跳转登陆页……')
        setTimeout(() => {
          this.replaceGo({ name: 'login' })
        }, 2000)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @rootSize: 3.75vw;
  .container{
    height: 100vh;
    background-image:linear-gradient(#EF9B7D, #E24A46);

    .logo{
      padding:(30/@rootSize);
      text-align: center;
    }

    .form{
      width:90%;
      margin: 0 auto;
      .item{
        display: flex;
        align-items:center;
        padding:(10/@rootSize);
        margin-bottom:(15/@rootSize);
        background-color: #EA9182;

        input{
          flex: 1;
          border:none;
          background-color: #EA9182;
          text-indent: (8/@rootSize);
          color:#eee;
        }

        input::placeholder{
          color:#eee;
        }
      };

      .jump{
        text-align: right;
        .a{
          color: #eee;
        }
      }
    }

    .button {
      margin:(30/@rootSize) (20/@rootSize) 0 ;
      .van-button--default{
        color: #E75C54;
      }
    }
  }
</style>
