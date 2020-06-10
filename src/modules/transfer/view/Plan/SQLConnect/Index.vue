<template>
  <div class="cntr">
    <div class="content">
      <v-card class="mx-auto elevation-3" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <!-- <div class="mb-4">源数据库</div> -->
           <v-list-item-title class="headline mb-1">
              源数据库
              <v-select :items="['Oracle 11g', 'MySQL', 'PostgreSQL', 'SQL Server']" label></v-select>
            </v-list-item-title>

            <v-text-field v-model="host" label="主机名(host)" required></v-text-field>

            <v-text-field v-model="name" label="端口(port)" required></v-text-field>

            
            <v-text-field v-model="host" label="用户名(user)" required></v-text-field>

            <v-text-field v-model="name" label="口令(password)" required></v-text-field>


          </v-list-item-content>

        </v-list-item>

        <v-card-actions>
          <v-btn text color="deep-purple accent-4">测试链接</v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <div class="btns">
      <v-btn color="primary">下一步</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data:()=>({
    host:'',port:'' 
  })
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
}
.btns {
  text-align: center;
  padding: 30px 0;
}
</style>