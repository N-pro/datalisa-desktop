

<template>
  <v-tabs
    class="fill"
    :style="{height:'100%'}"
    next-icon="mdi-arrow-right-bold-box-outline"
    prev-icon="mdi-arrow-left-bold-box-outline"
  >
    <v-tab :href="`#tab-0`" :style="{marginLeft:'56px'}"><v-icon left small>mdi-calendar-text</v-icon>新建项目</v-tab>

    <v-tab :href="`#tab-1`"><v-icon left small>mdi-format-list-numbered</v-icon>历史记录</v-tab>

    <v-tab-item :value="'tab-0'">
      <plan/>
    </v-tab-item>

    <v-tab-item :value="'tab-1'">
      <v-card flat tile>
        <v-card-text>3123131</v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>
<script>
import Plan from "./Plan/Index";

export default {
  components: { Plan },
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<style  scoped>
.fill >>> .v-window__container,
.fill >>> .v-window-item {
  height: 100%;
}
</style>
