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
          v-model.trim="parentName"
          label="家长姓名"
          placeholder="家长姓名"
          name="name"
          required
          :rules="[{ required: true, message: '请填写家长姓名' }]"
        />

      <van-field
        v-model.trim="parentMob"
        required type="tel"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请填写家长手机号' }]"
         />

      <van-field
        v-model.trim="notes"
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
import { userApply } from '@/api/user'
export default {
  name: 'user-apply',
  data () {
    return {
      parentName: '',
      parentMob: null,
      notes: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    async onSubmit () {
      await userApply({
        parentName: this.parentName,
        parentMob: this.parentMob,
        notes: this.notes
      })

      this.parentName = ''
      this.parentMob = ''
      this.notes = ''
      this.$toast.success({
        message: '预约报名成功',
        overlay: true
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
