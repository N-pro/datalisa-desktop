<template>
  <div class="connect-cntr">
    <div class="input_sql">
      <h2>数据源</h2>
      <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" >
        <a-form-model-item label="主机名(H)：" labelAlign="left">
          <a-input v-model="form.name"  size="small" />
        </a-form-model-item>
        <a-form-model-item label="端口(P)：" labelAlign="left">
          <a-input v-model="form.name"  size="small" />
        </a-form-model-item>
        <a-form-model-item label="用户名(U)：" labelAlign="left">
          <a-input v-model="form.name"  size="small" />
        </a-form-model-item>
        <a-form-model-item label="口令(W)：" labelAlign="left">
          <a-input v-model="form.name"  size="small" />
        </a-form-model-item>
      </a-form-model>
    </div>
    <div style="height:100%;width:200px:text-align:center;padding-top:250px">
      <a-icon type="double-right" style="font-size:44px"/>
    </div>

    <div class="output_sql">
      <h2>目标</h2>
      <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-model-item label="主机名(H)：" labelAlign="left">
          <a-input v-model="form.name" size="small"  />
        </a-form-model-item>
        <a-form-model-item label="端口(P)：" labelAlign="left">
          <a-input v-model="form.name" size="small"  />
        </a-form-model-item>
        <a-form-model-item label="用户名(U)：" labelAlign="left">
          <a-input v-model="form.name"  size="small" />
        </a-form-model-item>
        <a-form-model-item label="口令(W)：" labelAlign="left">
          <a-input v-model="form.name" size="small"  />
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelCol: { span: 24 },
      wrapperCol: { span: 24 },
      form: {
        name: "",
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!", this.form);
    }
  }
};
</script>


<style scope>
.connect-cntr,
.input_sql,
.output_sql {
  height: 100%;
  overflow: hidden;
}

.connect-cntr {
  display: flex;
  flex-direction: row;
}

.input_sql,
.output_sql {
  flex: 1;
  padding: 40px;
  overflow-y: auto!important;
}
</style>


