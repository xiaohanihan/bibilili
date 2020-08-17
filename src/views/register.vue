<template>
  <div class="container">
    <login-top title="注册bibilili"></login-top>
    <div>
      <van-field v-model="name" label="姓名" placeholder="请输入姓名" style="margin:15px 0" />
      <van-field v-model="account" label="账号" placeholder="请输入用户名" />
      <van-field v-model="password" label="密码" type="password" placeholder="请输入密码" />
      <van-field v-model="messageCode" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
    </div>
  </div>
</template>
<script>
import LoginTop from '@/components/LoginTop'
export default {
  components: { LoginTop },
  data() {
    return {
      account: '',
      password: '',
      messageCode: '',
    }
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