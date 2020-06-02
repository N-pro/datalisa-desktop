<template>
  <page-cntr></page-cntr>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageCntr from './components/PageCntr.vue';

@Component({
  components: {
    PageCntr,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #435668;
  margin-top: 60px;
}
</style>
