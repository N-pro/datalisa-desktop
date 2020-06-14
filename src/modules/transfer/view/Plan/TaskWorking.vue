<template>
  <div class="cntr">
    <div class="content">
    </div>

    <div class="btns">
      <v-btn color="primary" @click="e=>cancel()">取消任务</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  // components: { SqlCard },
  methods: {
    cancel() {
      this.$emit("complete");
    }
  }
};
</script>

<style scoped>
.cntr {
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
}

.content {
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}
.btns {
  text-align: center;
  padding: 30px 0;
}
</style>