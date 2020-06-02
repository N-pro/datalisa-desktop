<template>
  <div>PAGE_CNTR1

      <component :is="'transferindex'"></component>
  </div>
</template>

<script>
import router from "../router/index";

const re = [];
const s = r => {
  Object.keys(r).map(k => {
    const v = r[k];
    if (v && typeof v.name === "string") {
      re.push(v);
    } else if (v && typeof v === "object") {
      s(v);
    }
  });
};
s(router);

export default {
  components: re.reduce((r, v) => {
    r[v.name] =v.component;
    return r;
  }, {}),
//   components:{
//       'transferindex':()=>import('/src/modules/entry/view/index.page.vue')
//   },
  mounted() {
console.log(re.reduce((r, v) => {
    r[v.name] = () => import(v.path);
    return r;
  }, {}));
  }
};
</script>

<style>
</style>