<template>
  <div class="header">
    <div class="logo-wrap" @click="onClickLogo">
      <img class="logo" :src="logo" />
      <span>云音乐</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import logo from "@/assets/logo.png";

export default {
  data() {
    return {};
  },
  methods: {
    onClickLogo() {
      this.$router.push("/discovery");
    },
  },
  created() {
    this.logo = logo;
  },
};
</script>

<style lang='scss' scoped>
.header {
  display: flex;
  align-items: center;
  height: $header-height;
  background-color: $body-bgcolor;
  padding: 16px;
  .logo-wrap {
    display: flex;
    align-items: center;
    font-size: $font-size-title;
    color: $white;
    cursor: pointer;

    .logo {
      width: 30px;
      height: 30px;
      margin-right: 8px;
    }
  }
}
</style>