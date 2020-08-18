<template>
  <div class="container">
    <login-top title="登陆">
        <div slot="right" style="font-size: 3.889vw" @click="$router.push('./register')">
        注册
      </div>
    </login-top>
    <div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          label="账号"
          name="username"
          placeholder="请输入用户名"
          :rules="[{required: true,message: ''}]"
          style="margin: 4.167vw 0"
        />
        <van-field
          v-model="password"
          label="密码"
          name="password"
          type="password"
          placeholder="请输入密码"
          :rules="[{required: true,message: ''}]"
        />
        <!-- <van-field v-model="messageCode" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
        </van-field>-->
        <div style="margin: 4.167vw;">
          <van-button round block native-type="submit" color="#FF9DB7">登录</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import LoginTop from '@/components/LoginTop'
export default {
  components: { LoginTop },
  data() {
    return {
      name: '',
      username: '',
      password: '',
      messageCode: '',
      username: '',
    }
  },
  methods: {
    onSubmit(values) {
      this.$http
        .post('/register', values)
        .then((res) => {
          console.log(res)
        })
        .catch((error) => console.log(error))
    },
  },
}
</script>
<style lang="less" scoped>
.container {
  background-color: #f4f4f4;
  width: 100%;
  height: 100%;
}
</style>