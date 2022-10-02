<template>
  <div>
    <van-nav-bar
      title="宝宝信息"
      left-arrow
      fixed
      placeholder
      @click-left="onClickLeft"
    />

    <van-form @submit="onSubmit">
      <van-field
        v-model="name"
        label="姓名"
        placeholder="宝宝姓名"
        name="姓名"
      />

      <van-field name="uploader" label="照片" >
        <template #input>
          <van-uploader v-model="uploader" :max-count="1" :after-read="afterRead" />
        </template>
      </van-field>

      <van-field
        readonly
        clickable
        name="datetimePicker"
        :value="birth"
        label="出生年月"
        placeholder="选择出生年月"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker
          type="year-month"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>

      <van-field name="radio" label="性别">
        <template #input>
          <van-radio-group v-model="sex" direction="horizontal">
            <van-radio name="1">男</van-radio>
            <van-radio name="2">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field
        v-model="address"
        label="居住地址"
        placeholder="请输入居住地址"
        name="address"
      />

      <van-field
        v-model="idCard"
        label="身份证号"
        placeholder="请输入身份证号"
        name="idCard"
      />
      <van-field
        v-model="introduce"
        rows="3"
        autosize
        label="介绍宝宝"
        type="textarea"
        placeholder="来介绍下你家宝宝吧"
      />
      <div style="margin: 16px;">
        <van-button round block type="warning" native-type="submit">保存</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'user-info',
  data () {
    return {
      name: '',
      birth: '2018-06',
      uploader: [],
      sex: null,
      address: '',
      idCard: '',
      introduce: '',
      showPicker: false
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onSubmit () {
      console.log(1)
    },
    afterRead (file) {
      console.log(file)
    },
    onConfirm (time) {
      console.log(time)
      this.birth = time.toString()
      this.showPicker = false
    }
  }
}
</script>

<style lang="less" scoped>

</style>
