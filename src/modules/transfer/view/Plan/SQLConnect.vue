<template>
  <div class="cntr">
    <div class="content">
      <sql-card type="source" />
      <v-icon x-large>mdi-arrow-right-thick</v-icon>
      <sql-card type="target" />
    </div>

    <div class="btns">
      <v-btn color="primary" @click="e=>next()">下一步</v-btn>
    </div>
  </div>
</template>

<script>
import SqlCard from "./widget/Sqlcard";

export default {
  components: { SqlCard },
  methods: {
    next() {
      this.$emit("connect");
    }
  }
};
</script>

<style scoped>
.cntr {
  height: 100%;
  display: flex;
  overflow: hidden;
  padding: 24px;
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