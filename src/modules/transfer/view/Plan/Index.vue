<template>
  <v-stepper v-model="e1" :style="{boxShadow:'none'}" class="cntr">
    <v-stepper-header :style="{boxShadow:'none'}">
      <template v-for="(step,index) in steps">
        <v-divider v-if="index>0" :key="`d-${index}`"></v-divider>
        <v-stepper-step
          :complete="taskInfo.finish || (e1 > (index+1))"
          :step="index+1"
          :key="`t-${index}`"
        >{{step[0]}}</v-stepper-step>
      </template>
    </v-stepper-header>

    <v-stepper-items class="content">
      <v-stepper-content
        v-for="(step,index) in steps"
        :key="`s${index}`"
        :step="index+1"
        :style="{height:'100%',padding:'0'}"
      >
        <component
          :is="step[1]"
          @connect="e=>connect(e)"
          @confirm="e=>confirm(e)"
          @back="e=>back(e)"
          @complete="e=>complete(e)"
        />
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import SqlConnect from "./SQLConnect";
import ConfirmList from "./ConfirmList";
import TaskWorking from "./TaskWorking";

export default {
  components: { SqlConnect, ConfirmList, TaskWorking },
  data: () => ({
    e1: 1,
    taskInfo: {
      finish: false
    },
    steps: [
      ["连接数据库", "SqlConnect"],
      ["确认迁移清单", "ConfirmList"],
      ["开始迁移", "TaskWorking"]
    ]
  }),
  methods: {
    connect() {
      this.e1 = 2;
    },
    confirm() {
      this.e1 = 3;
    },
    back() {
      this.e1 = this.e1 - 1;
    },
    complete() {
      this.e1 = 1;
    }
  }
};
</script>

<style scoped>
.cntr {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 24px 24px 24px;
  overflow: hidden;
}

.content {
  flex: 1;
  overflow: hidden;
}

.content >>> .v-stepper__wrapper {
  height: 100%;
}
</style>