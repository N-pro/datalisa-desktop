<template>
  <v-stepper v-model="e1" :style="{boxShadow:'none'}" class="cntr">
    <v-stepper-header :style="{boxShadow:'none'}">
      <v-stepper-step :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Name of step 3</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items class="content">
      <v-stepper-content step="1" :style="{boxShadow:'none',height:'100%'}">
        <sql-connect/>

     
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 3">Continue</v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 1">Continue</v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import SqlConnect from "./SQLConnect/Index";

export default {
  components:{SqlConnect},
  data() {
    return {
      e1: 1 
    };
  }
};
</script>

<style scoped>
.cntr{
  height:100%;
  display: flex;
  flex-direction: column;
}

.content{
  flex: 1;
}

.content >>> .v-stepper__wrapper{
  height: 100%;
}

</style>