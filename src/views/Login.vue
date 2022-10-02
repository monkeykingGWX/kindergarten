<template>
  <div class="container">
    <div class="logo">
      <img src="@/assets/image/logo.png" />
    </div>
    <div class="form" >
      <div class="item">
        <van-icon name="user-o" color="#fff" /> <input type="text" autocomplete="off" placeholder="请输入用户名" />
      </div>
      <div class="item">
        <i class="iconfont" style="color:#fff">&#xe669;</i> <input type="password" autocomplete="off" placeholder="请输入密码" />
      </div>
      <div class="jump">
        <router-link class="a" :to="{name:'reg'}">还没账号，去注册</router-link>
      </div>
    </div>
    <div class="button">
      <van-button type="default" round block >登&nbsp;&nbsp;录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
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
