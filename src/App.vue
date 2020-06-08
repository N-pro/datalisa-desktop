<template>
  <v-app>
    <v-content>
      <v-tabs
        class="fill"
        dark
        :vertical="true"
        :icons-and-text="true"
        :style="{height:'100%'}"
        :center="true"
      >
        <v-tab :href="`#tab-0`">
          Tab 0
          <v-icon>mdi-phone</v-icon>
        </v-tab>
        
        <v-tab :href="`#tab-1`">
          Tab 1
          <v-icon>mdi-phone</v-icon>
        </v-tab>
        
        <v-tab :href="`#tab-2`">
          数据迁移
          <v-icon>mdi-phone</v-icon>
        </v-tab>

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
        
        <v-tab-item :value="'tab-2'" 
        :style="{height:'100%'}">
          <transfer/>
        </v-tab-item>

      </v-tabs>
    </v-content>
  </v-app>
</template>

<script >
import Vue from "vue";
import Transfer from './modules/transfer/view/index.page'
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",

  components: {
    Transfer
  },

  data: () => ({
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

  })
}
</script>

<style  scoped>
  .fill >>> .v-window__container,
  .fill >>> .v-window-item{
    height: 100%;
  }
</style>
