<template>
  <section class="Login">
    <a-form :form="form" class="login-form" @submit="handleSubmit">
      <a-form-item>
        <a-input v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]" placeholder="Username">
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]" type="password" placeholder="Password">
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]">
          Remember me
        </a-checkbox>
        <a class="login-form-forgot" href="">Forgot password</a>
        <a-button type="primary" html-type="submit" class="login-form-button">Log in</a-button>
        Or

        <router-link  to="/register">register now!</router-link>
       
      </a-form-item>
    </a-form>
  </section>
</template>

<script lang="ts">
import Login from "@/view/login/login.ts";
export default Login;
</script>
<style scoped lang="scss">
.Login {
  .login-form {
    width: 300px;
    margin: auto;
  }
  .login-form-forgot {
    float: right;
  }
  .login-form-button {
    width: 100%;
  }
}
</style>