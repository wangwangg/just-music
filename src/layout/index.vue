<template>
  <div class="layout">
    <LayoutHeader />

    <div class="layout-body">
      <!-- <LayoutMenu /> -->
      <div id="page-content" class="content">
        <router-view :class="routerViewCls" />
      </div>
    </div>
  </div>
</template>

<script>
import LayoutHeader from "./header";
import LayoutMenu from "./menu";
import { topRoutes } from "@/router";

export default {
  data() {
    return {};
  },
  components: { LayoutHeader, LayoutMenu },
  computed: {
    routerViewCls() {
      return topRoutes.find(({ path }) => path === this.$route.path)
        ? "router-view-center"
        : "";
    },
  },
};
</script>

<style lang='scss' scoped>
.layout {
  height: 100%;

  .layout-body {
    display: flex;
    height: calc(100% - #{$header-height});

    .content {
      flex: 1;
      overflow-y: auto;
      margin-bottom: $mini-player-height;
      padding-bottom: 32px;

      .router-view-center {
        max-width: $center-content-width;
        margin: auto;
      }
    }
  }
}
</style>