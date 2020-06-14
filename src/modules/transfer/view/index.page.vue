

<template>
  <div class="cntr">
    <v-tabs
      class="tabs"
      v-model="tab"
      next-icon="mdi-arrow-right-bold-box-outline"
      prev-icon="mdi-arrow-left-bold-box-outline"
    >
      <v-tab :href="`#tab-0`" :style="{marginLeft:'56px'}">
        <v-icon left small>mdi-calendar-text</v-icon>迁移项目
      </v-tab>

      <v-tab :href="`#tab-1`">
        <v-icon left small>mdi-format-list-numbered</v-icon>历史记录
      </v-tab>
    </v-tabs>
    <div class="divider"></div>

    <v-tabs-items v-model="tab" class="items">
      <v-tab-item :value="'tab-0'"  class="item">
        <plan />
      </v-tab-item>
      <v-tab-item :value="'tab-1'"  class="item">
        <v-card flat tile>
          <v-card-text>3123131</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
import Plan from "./Plan/Index";

export default {
  components: { Plan },
  data: () => ({
    tab: null,
    collapsed: false
  })
};
</script>

<style  scoped>
.cntr{
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.divider{
  height: 24px;
  background-color: #f5f5f5;
}
.tabs{
  flex: none;
}
.items{
  flex: 1;
}
.item{
  height: 100%;
}

/* .fill >>> .v-window__container,
.fill >>> .v-window-item {
  height: 100%;
} */
</style>
