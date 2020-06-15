<template>
  <div class="flex-col">
    <div class="flex-fix" :style="{padding:' 24px 18px 0'}">
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-autocomplete
            outlined
            :items="states"
            :filter="customFilter"
            item-text="name"
            label="模式"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </div>
    <div class="content flex-fill">
      <div class="item" v-for="item in items" :key="item.type" :style="{padding:'18px'}">
        <infocard :title="item.type" :list="item.list" />
      </div>
    </div>
    <div class="btns flex-fix">
      <v-btn text style="margin-right:18px" @click="e=>back()">上一步</v-btn>
      <v-btn color="primary" @click="e=>next()">开始迁移</v-btn>
    </div>
  </div>
</template>

<script>
import { randInt, randWord } from "@/utils/rand";
import Infocard from "./widget/Infocard";
export default {
  components: { Infocard },
  data: () => ({
    itemsPerPage: 4,
    items: [
      {
        type: "表",
        list: new Array(randInt(6, 50)).fill(0).map(() => randWord(5, 10))
      },
      {
        type: "视图",
        list: new Array(randInt(6, 50)).fill(0).map(() => randWord(5, 10))
      },
      {
        type: "序列",
        list: new Array(randInt(6, 50)).fill(0).map(() => randWord(5, 10))
      },
      {
        type: "存储过程",
        list: new Array(randInt(6, 50)).fill(0).map(() => randWord(5, 10))
      },
      {
        type: "函数",
        list: new Array(randInt(6, 50)).fill(0).map(() => randWord(5, 10))
      }
    ],
    states: [
      { name: "Florida", abbr: "FL", id: 1 },
      { name: "Georgia", abbr: "GA", id: 2 },
      { name: "Nebraska", abbr: "NE", id: 3 },
      { name: "California", abbr: "CA", id: 4 },
      { name: "New York", abbr: "NY", id: 5 }
    ]
  }),
  methods: {
    customFilter(item, queryText, itemText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
    back() {
      this.$emit("back");
    },
    next() {
      this.$emit("confirm");
    }
  }
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;
}

.item {
  flex: none;
}

.btns {
  text-align: center;
  padding: 30px 0;
}
</style>