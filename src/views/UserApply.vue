<template>
  <div>
    <van-nav-bar
      title="预约入学"
      left-arrow
      fixed
      placeholder
      @click-left="onClickLeft"
    />

    <van-form @submit="onSubmit">
      <van-field
          v-model="name"
          label="家长姓名"
          placeholder="家长姓名"
          name="name"
          required
        />

      <van-field v-model="tel"  required type="tel" label="手机号" placeholder="请输入手机号" />

      <van-field
        v-model="note"
        rows="3"
        autosize
        label="备注"
        type="textarea"
        placeholder="请输入备注信息"
      />

      <div style="margin: 16px;">
        <van-button round block type="warning" native-type="submit">保存</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'user-apply',
  data () {
    return {
      name: '',
      tel: null,
      note: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onSubmit () {
      console.log('submit')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
