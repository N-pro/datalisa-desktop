<template>
  <div id="app-view">
    <page-cntr></page-cntr>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageCntr from "./components/PageCntr.vue";
import './style/index.scss'

@Component({
  components: {
    PageCntr
  }
})
export default class App extends Vue {}
</script>

<style  lang="scss" scoped>
#app-view {
  height: 100%;
  width: 100%;
  position: relative;
}
</style>
