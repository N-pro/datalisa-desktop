<template>
  <div class="steps-cntr">
    <a-steps class="steps-target" :current="current">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
      <connect v-if="current === 0" />
      <result v-if="current === 2" />
    </div>
    <div class="steps-action">
      <a-button v-if="current < steps.length - 1" type="primary" @click="next">Next</a-button>
      <a-button
        v-if="current == steps.length - 1"
        type="primary"
        @click="$message.success('Processing complete!')"
      >Done</a-button>
      <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">Previous</a-button>
    </div>
  </div>
</template>
<script>
import Result from "./Result";
import Connect from "./Connect";

export default {
  components: { Result, Connect },
  data() {
    return {
      current: 0,
      steps: [
        {
          title: "连接到数据库",
          content: "First-content"
        },
        {
          title: "配置迁移信息",
          content: "Second-content"
        },
        {
          title: "进行迁移",
          content: "Second-content"
        }
      ]
    };
  },
  methods: {
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    }
  }
};
</script>
<style scoped>
.steps-cntr {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

.steps-content {
  margin-top: 16px;
  /* border: 1px dashed #e9e9e9; */
  border-radius: 6px;
  /* background-color: #fafafa; */
  text-align: center;
  flex: 1;
  overflow-y: auto;
}

.steps-action {
  overflow: hidden;
  margin-top: 24px;
  text-align: center;
}
</style>

