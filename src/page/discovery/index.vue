<template>
  <div class="page">
    <div class="discovery-content">
      <Banner />
      <NewPlaylists />
      <NewSongs />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Banner from "./banner";
import NewPlaylists from "./new-playlists";
import NewSongs from "./new-songs";
export default {
  data() {
    return {};
  },
  components: {
    NewSongs,
    Banner,
    NewPlaylists,
  },
};
</script>

<style lang="scss" scoped>
.discovery {
  padding: 0 36px;
}
</style>