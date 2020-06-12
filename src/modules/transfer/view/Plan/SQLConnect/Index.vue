<template>
  <div class="cntr">
    <div class="content">
      <sql-card type="source"/>
       <v-icon x-large>mdi-arrow-right-thick</v-icon>
      <sql-card type="target"/>
    </div>

    <div class="btns">
      <v-btn color="primary">下一步</v-btn>
    </div>
  </div>
</template>

<script>
import SqlCard from "./Sqlcard";

export default {
  components: { SqlCard }
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