<template>
  <div v-if="loading" class="loading">
    <a-spin :tip="'正在下载中...'" :size="'large'" />
  </div>
</template>

<script>
import { client } from "../event/index";

window.ev2 = client;

export default {
  data() {
    return {
      loading: false
    };
  },
  mounted() {
    client.checkVersion().then(v => {
      if (v) this.openNotification();
    });
  },
  methods: {
    update() {
      this.loading = true;
      client.installLatest().catch(msg=>{
        if(!msg) {
          this.$message.error(msg)
          this.loading = false
        }
      });
    },
    openNotification() {
      const key = `open${Date.now()}`;
      this.$notification.open({
        message: "软件更新",
        description: "检测到有更新的版本！",
        btn: h => {
          return h(
            "a-button",
            {
              props: {
                type: "primary",
                size: "small"
              },
              on: {
                // click: () =>
                click: () => {
                  this.$notification.close(key);
                  this.update();
                }
              }
            },
            "更新"
          );
        },
        key
      });
    }
  }
};
</script>

<style scope>
.loading {
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  position: fixed;
  z-index: 999;
  left: 0;right:0;top:0;bottom: 0;
   display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
</style>