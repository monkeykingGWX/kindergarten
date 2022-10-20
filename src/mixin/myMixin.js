import store from '@/store/index'

export default {
  methods: {
    go (target) { // 跳转到指定路由
      this.$router.push(target)
    },
    back () {
      this.$router.go(-1)
    },
    loginGo (target) { // 跳转前判断是否登录
      const jwtToken = store.state.jwtToken
      const now = Date.now()
      if (jwtToken.expire && jwtToken.expire > now) {
        this.$router.push(target)
      } else {
        this.$router.push({ name: 'login' })
      }
    },
    replaceGo (target) { // 替换当前路由
      this.$router.replace(target)
    }
  }
}
