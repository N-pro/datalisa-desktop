<template>
  <v-card class="mx-auto elevation-3" max-width="344" outlined >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="mb-4">源数据库</div>
        <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions> 
        <v-select
          :items="['Oracle 11g', 'MySQL', 'PostgreSQL', 'SQL Server']"
          label="数据库类型"
        ></v-select>
      <v-btn text>测试链接</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    
}
</script>