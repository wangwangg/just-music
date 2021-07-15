<template>
  <div class="page">
    <div class="discovery-content">
      <Banner />
      <Recommend />
      <NewSongs />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Banner from "./banner";
import Recommend from "./recommend";
import NewSongs from "./new-songs";
export default {
  data() {
    return {};
  },
  components: {
    Recommend,
    NewSongs,
    Banner,
  },
};
</script>

<style lang="scss" scoped>
.discovery {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 36px;
  .discovery-content {
    max-width: 1000px;
  }
}
</style>