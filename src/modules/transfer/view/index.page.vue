

<template>
  <a-layout style="height:100%">
    <a-layout-content
      :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
    >
      <update-view />

      <a-tabs default-active-key="1" @change="callback">
        <a-tab-pane key="1" tab="当前任务">Content of Tab Pane 1</a-tab-pane>
        <a-tab-pane key="2" tab="历史记录" force-render>Content of Tab Pane 2</a-tab-pane>
      </a-tabs>
    </a-layout-content>
  </a-layout>
</template>
<script>
import UpdateView from "../../common/view/Update";
export default {
  components: {
    UpdateView
  },
  data() {
    return {
      collapsed: false
    };
  }
};
</script>
<style>
</style>
