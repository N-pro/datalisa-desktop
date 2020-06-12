<template>
  <v-card class="mx-auto elevation-3" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <!-- <div class="mb-4">源数据库</div> -->
        <v-list-item-title class="headline mb-1">
          <div class="content">
            {{type==="source"?'源数据库':'目标数据库'}}
            <v-select :items="['Oracle 11g', 'MySQL', 'PostgreSQL', 'SQL Server']" label></v-select>
          </div>
          <v-avatar class="avatar" tile color="grey" :height="80" :size="160">

          </v-avatar>
        </v-list-item-title>

        <v-text-field v-model="host" label="主机名(host)" required></v-text-field>

        <v-text-field v-model="port" label="端口(port)" required></v-text-field>

        <v-text-field v-model="username" label="用户名(user)" required></v-text-field>

        <v-text-field v-model="password" label="口令(password)" required></v-text-field>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn text color="deep-purple">测试连接</v-btn>
      <v-btn text >重置</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["type"],
  data: () => ({
    host: "",
    port: "",
    username: "",
    password: ""
  })
};
</script>

<style scoped>
.headline{
    display: flex;
}
.content{
    flex: auto;
}
.avatar{
    margin: 2px 0 2px 18px;
}
</style>