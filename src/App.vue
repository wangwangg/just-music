<template>
  <div id="app">
    <Layout />
    <Miniplayer />
  </div>
</template>

<script>
import Layout from '@/layout'
import Miniplayer from '@/components/mini-player'
export default {
  components: { Layout, Miniplayer }
}
</script>

<style lang='scss'>
#app {
  height: 100%;
  background-color: $body-bgcolor;
  color: $font-color;
  font-size: $font-size;
}
</style>