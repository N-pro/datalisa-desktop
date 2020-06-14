<template>
  <v-app>
    <v-content class="cntr">
      <v-tabs
        class="title"
        dark
        v-model="tab"
        :vertical="true"
        :icons-and-text="true"
        :style="{height:'100%'}"
        :center="true"
      >
        <v-tab :href="`#tab-0`">
          数据展示
          <v-icon>mdi-google-analytics</v-icon>
        </v-tab>

        <v-tab :href="`#tab-1`">
          分析建模
          <v-icon>mdi-monitor-edit</v-icon>
        </v-tab>

        <v-tab :href="`#tab-2`">
          数据迁移
          <v-icon>mdi-transfer</v-icon>
        </v-tab>
      </v-tabs>

      <v-tabs-items class="content" v-model="tab">
        <v-tab-item :value="'tab-0'">
          <v-card flat tile>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item :value="'tab-1'">
          <v-card flat tile>
            <v-card-text>{{ text }}1</v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item :value="'tab-2'" :style="{height:'100%'}">
          <transfer />
        </v-tab-item>
      </v-tabs-items>
    </v-content>
  </v-app>
</template>

<script >
import Vue from "vue";
import Transfer from "./modules/transfer/view/index.page";

export default {
  name: "App",

  components: {
    Transfer
  },

  data: () => ({
    tab: null,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  })
};
</script>

<style  scoped>
.cntr >>> .v-content__wrap {
  display: flex;
}

.title {
  flex: 0;
}

.content {
  flex: auto;
  overflow: hidden;
}
.content >>> .v-window__container {
  height: 100%;
}

</style>

<style>
html {
  overflow: hidden;
}
</style>