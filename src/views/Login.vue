<template>
  <div class="container">
    <div class="logo">
      <img src="@/assets/image/logo.png" />
    </div>
    <div class="form" >
      <div class="item">
        <van-icon name="user-o" color="#fff" /> <input v-model.trim="loginName" type="text" autocomplete="off" placeholder="请输入用户名" />
      </div>
      <div class="item">
        <i class="iconfont" style="color:#fff">&#xe669;</i> <input v-model.trim="loginPass" type="password" autocomplete="off" placeholder="请输入密码" />
      </div>
      <div class="jump">
        <div class="a" @click="replaceGo({name:'reg'})">还没账号，去注册</div>
      </div>
    </div>
    <div class="button">
      <van-button type="default" round block @click="login">登&nbsp;&nbsp;录</van-button>
    </div>
  </div>
</template>

<script>
import { userLogin } from '@/api/user'
import myMixin from '@/mixin/myMixin'
import { mapActions } from 'vuex'

export default {
  name: 'login',
  mixins: [myMixin],
  data () {
    return {
      loginName: '',
      loginPass: ''
    }
  },
  methods: {
    async login () {
      if (!this.loginName) {
        this.$toast.fail('请填写账号')
        return
      }

      if (!this.loginPass) {
        this.$toast.fail('请填写密码')
        return
      }

      const { data } = await userLogin({
        loginName: this.loginName,
        loginPass: this.loginPass
      })

      // 记录token信息至vuex中
      const payload = {}
      payload.token = data.token
      payload.expire = data.expire + Date.now()
      this.saveToken(payload)

      this.$toast.success({ message: '登陆成功，跳转中……', overlay: true })
      setTimeout(() => {
        this.back()
      }, 2000)
    },
    ...mapActions(['saveToken'])
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
