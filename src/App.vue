<template>
  <div id="app">
    <Layout />
    <Miniplayer />
    <Playlist />
  </div>
</template>

<script>
import Layout from "@/layout";
import Miniplayer from "@/components/mini-player";
import Playlist from "@/components/playlist";
export default {
  components: { Layout, Miniplayer, Playlist },
};
</script>

<style lang='scss'>
#app {
  height: 100%;
  background-color: var(--body-bgcolor);
  color: var(--font-color);
  font-size: $font-size;
}
</style>