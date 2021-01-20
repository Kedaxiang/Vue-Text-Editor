<template>
  <div class="login">
    <div class="wrapper">
      <p class="title">本科人才检测系统</p>

      <div class="contain">
        <div class="box">
          <img src="../assets/images/logo.jpg" />
        </div>

        <el-form
          class="form"
          :rules="rules"
          :model="loginForm"
          ref="loginForm"
          @submit.native.prevent="submitForm"
        >
          <el-form-item prop="adminName">
            <el-input placeholder="用户名" v-model="loginForm.adminName" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="密码"
              v-model="loginForm.password"
              type="password"
              prefix-icon="el-icon-lock"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" class="login-button" native-type="submit">登陆</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
// import { login } from "@/api/index";

export default {
  data() {
    return {
      loginForm: {
        adminName: "admin",
        password: "123456",
      },
      rules: {
        adminName: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.loginForm.validate(async (valid) => {
        // element-ui 提供的表单预验证
        if (valid) {
          // let { data: res } = await login(this.loginForm);
          // console.log(res);
          // if (res.status == 200) {
          //   let loginAdmin = res.data;
          //   if (loginAdmin.roleList[0].name == "超级管理员") {
          //     loginAdmin.grade = 1;
          //   } else {
          //     // loginAdmin.grade = 1;
          //     loginAdmin.grade = 0;
          //   }
          //   window.localStorage.setItem(
          //     "loginAdmin",
          //     JSON.stringify(loginAdmin)
          //   );
          //   this.$message.success("登陆成功");
          //   this.$router.push("/home/advertising");
          // }
          this.$message.success("登陆成功");
          this.$router.push("/home/home");
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  background: rgb(50, 60, 84);
  position: relative;
}

.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);

  .title {
    color: #eee;
    text-align: center;
    font-size: 34px;
    margin-bottom: 120px;
  }
}

.contain {
  width: 450px;
  height: 300px;
  background: #fff;
  position: relative;
  border-radius: 20px;

  .box {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    padding: 8px;
    border: 1px solid #fff;
    box-shadow: 0 0 8px #fff;
    background: #fff;
    z-index: 99;

    img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
      background: #fff;
    }
  }

  .form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 30px;
    box-sizing: border-box;

    .login-button {
      width: 100%;
    }
  }
}
</style>
