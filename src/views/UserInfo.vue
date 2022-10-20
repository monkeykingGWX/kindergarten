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
        v-model="nikeName"
        label="昵称"
        placeholder="昵称"
        name="昵称"
      />
      <van-field
        v-model="babyName"
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
        :value="birthday"
        label="出生年月"
        placeholder="选择出生年月"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker
          type="date"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>

      <van-field name="radio" label="性别">
        <template #input>
          <van-radio-group v-model="gender" direction="horizontal">
            <van-radio :name="1">男</van-radio>
            <van-radio :name="2">女</van-radio>
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
import { getUserInfo, modifyUserInfo } from '@/api/user'
import { uploadFile } from '@/api/file'
import { API_BASE_DIR } from '@/config/config'
import { formatTime } from '@/utils/date'
import { mapActions } from 'vuex'

export default {
  name: 'user-info',
  data () {
    return {
      babyName: '',
      nikeName: '',
      birthday: '',
      uploader: [],
      face: '',
      gender: 0,
      address: '',
      idCard: '',
      introduce: '',
      showPicker: false
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    async onSubmit () {
      const subData = {
        babyName: this.babyName,
        nikeName: this.nikeName,
        birthday: this.birthday,
        gender: this.gender,
        face: this.face,
        address: this.address,
        idCard: this.idCard,
        introduce: this.introduce
      }

      const { data } = await modifyUserInfo(subData)
      const payload = {}
      payload.token = data.token
      payload.expire = data.expire + Date.now()
      this.saveToken(payload)

      this.$toast.success({ message: '修改成功', overlay: true })
    },
    async afterRead (file) {
      const formData = new FormData()
      formData.append('file', file.file)
      const { data } = await uploadFile(formData)
      this.face = data
      if (data.indexOf('http') === 0) {
        this.uploader = [{
          url: data
        }]
      } else {
        this.uploader = [{
          url: API_BASE_DIR + data
        }]
      }
    },
    onConfirm (time) {
      this.birthday = formatTime(time, 'YYYY-mm-dd')
      this.showPicker = false
    },
    async getUserInfo () {
      const { data } = await getUserInfo()
      this.nikeName = data.nikeName
      this.babyName = data.babyName
      this.gender = data.gender
      this.address = data.address
      this.idCard = data.idCard
      this.introduce = data.introduce
      this.face = data.face

      if (data.face) {
        if (data.face.indexOf('http') === 0) {
          this.uploader.push({
            url: data.face
          })
        } else {
          this.uploader.push({
            url: API_BASE_DIR + data.face
          })
        }
      }

      if (data.birthday) {
        const date = new Date(data.birthday)
        this.birthday = formatTime(date, 'YYYY-mm-dd')
      }
    },
    ...mapActions(['saveToken'])
  }
}
</script>

<style lang="less" scoped>

</style>
