<template>
  <v-card width="240" height="400">
    <div class="flex-col">
      <v-card-title class="flex-fix subheading font-weight-bold">{{ title }}</v-card-title>
      <v-divider class="flex-fix"></v-divider>
      <div class="flex-fill">
        <v-data-iterator
          hide-default-footer
          :items="list"
          :items-per-page.sync="pageSize"
          :page="page"
        >
          <template v-slot:default="props">
            <v-list-item v-for="(v,i) in props.items" :key="`${title}+${i}`">
              <v-list-item-content>
                <v-list-item-title>{{v}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-data-iterator>
      </div>
      <v-divider class="flex-fix"></v-divider>
      <div class="flex-fix">
        <v-row style="margin:0 0 0 -8px" align="center" justify="center">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn dark text color="primary" class="ml-2" v-bind="attrs" v-on="on">
                {{ pageSize }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in pageSizeList"
                :key="index"
                @click="updatePageSize(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-spacer />
          <v-btn dark icon color="blue darken-3" @click="formerPage">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <span class="grey--text">{{ page }} / {{ numberOfPages }}</span>
          <v-btn offset-y dark icon color="blue darken-3" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["title", "list"],
  data: () => ({
    page: 1,
    pageSize: 10,
    pageSizeList: [10, 20, 50]
  }),

  computed: {
    numberOfPages() {
      return Math.ceil(this.list.length / this.pageSize);
    },
    filteredKeys() {
      return this.keys.filter(key => key !== `Name`);
    }
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updatePageSize(number) {
      this.pageSize = number;
    }
  }
};
</script>

<style>
</style>