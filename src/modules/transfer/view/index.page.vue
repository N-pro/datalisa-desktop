

<template>
  <a-layout style="height:100%">
    <a-layout-content
      :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
    >
      <update-view />

      <a-tabs default-active-key="1" style="height:100%;display: flex;flex-direction: column;" >
        <a-tab-pane key="1" tab="当前任务" style="height:100%">
          <plan />
        </a-tab-pane>
        <a-tab-pane key="2" tab="历史记录" force-render style="height:100%">
          <histroy />
        </a-tab-pane>
      </a-tabs>
    </a-layout-content>
  </a-layout>
</template>
<script>
import UpdateView from "../../common/view/Update";
import Plan from './Plan/index'
import Histroy from './Histroy'
export default {
  components: {
    UpdateView,Plan,Histroy
  },
  data() {
    return {
      collapsed: false
    };
  }
};
</script>
<style>
.ant-tabs .ant-tabs-top-content{
  flex: 1;
  overflow: hidden;
} 
</style>
