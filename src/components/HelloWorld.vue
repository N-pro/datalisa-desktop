<template>
  <div class="hello">
    <button @click.prevent="begin">开始更新</button>

    <h3 v-for="(v,i) in msgs" :key="i">{{v}}</h3>
  </div>
</template>

<script >
import { ipcRenderer } from "electron";

export default {
  data(){
    return {
      msgs:['啥都没有']
    }
  },

  methods: {
    begin() {
      ipcRenderer.send("checkForUpdate");
    }
  },

  mounted() {
    console.log(this.$electron);

    ipcRenderer.on("message", (event, text) => {
      this.msgs.push(text)
    });
    
    ipcRenderer.on("downloadProgress", (event, progressObj) => {
      this.msgs.push(`percent: ${progressObj.percent || 0}%`)
    });

    ipcRenderer.on("isUpdateNow", () => {
      ipcRenderer.send("isUpdateNow");
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
