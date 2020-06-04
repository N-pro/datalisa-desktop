<template>
  <a-table
    ref="table"
    size="middle"
    :layout="'fixed'"
    bordered
    :rowKey="record => record.id"
    :columns="calcColumns"
    :dataSource="dataSource"
    :pagination="ipagination"
    :loading="loading"
    :scroll="{ y: true }"
    @change="handleTableChange"
  >
  </a-table>
</template>
<script>

/**
 * 过滤对象中为空的属性
 * @param obj
 * @returns {*}
 */
function filterObj(obj) {
  if (!(typeof obj == "object")) {
    return;
  }

  for (const key in obj) {
    if (
      Object.prototype.hasOwnProperty.call(obj, key) &&
      (obj[key] == null || obj[key] == undefined || obj[key] === "")
    ) {
      delete obj[key];
    }
  }
  return obj;
}

export default {
  props: ["columns","url",'searchParam'],
  data() {
    return {
      /* table加载状态 */
      loading: false,
      /* table选中keys*/
      selectedRowKeys: [],
      /* table选中records*/
      selectionRows: [],
      /* 分页参数 */
      ipagination: {
        current: 1,
        pageSize: 10,
        pageSizeOptions: ["10", "20", "30"],
        showTotal: (total, range) => {
          return range[0] + "-" + range[1] + " 共" + total + "条";
        },
        showQuickJumper: true,
        showSizeChanger: true,
        total: 0
      },
      /* 排序参数 */
      isorter: {
        column: "createTime",
        order: "desc"
      },
      filters: {},
      dataSource: []
    };
  },
  mounted() {
    this.loadData();
  },

  computed: {
    calcColumns() {
      const s = this.columns.map(v => {
        const key = v.dataIndex || v.key;
        let fn = null;
        if (this.$slots[key]) {
          fn = () => this.$slots[key];
        } else if (this.$scopedSlots[key]) {
          fn = this.$scopedSlots[key];
        }
        return( fn
          ? Object.assign({}, v, {
              customRender: fn
            })
          : v)
      });
      console.log(s);
      return s;
    }
  },
  methods: {
    loadData(arg) {
      //加载数据 若传入参数1则加载第一页的内容
      if (arg === 1) {
        this.ipagination.current = 1;
      }
      const params = this.getQueryParams(); //查询条件

    //   this.loading = true;
      // console.info(this.url.list)
    //   http
    //     .get(this.url, params)
    //     .then(
    //       res =>
    //         ([this.dataSource, this.ipagination.total] = [
    //           res.records,
    //           res.total
    //         ])
    //     )
    //     .catch(msg => this.$message.warning(msg||"出现错误！"))
    //     .finally(() => (this.loading = false));
    },
    handleTableChange(pagination, filters, sorter) {
      //分页、排序、筛选变化时触发
      //TODO 筛选
      if (Object.keys(sorter).length > 0) {
        this.isorter.column = sorter.field;
        this.isorter.order = "ascend" == sorter.order ? "asc" : "desc";
      }
      this.ipagination = pagination;
      this.loadData();
    },
    getQueryParams() {
      //获取查询条件
      const sqp = {};
      const param = Object.assign(
        sqp,
        this.searchParam,
        this.isorter,
        this.filters
      );
      param.field = this.getQueryField();
      param.pageNo = this.ipagination.current;
      param.pageSize = this.ipagination.pageSize;
      return filterObj(param);
    },
    getQueryField() {
      //TODO 字段权限控制
      let str = "id,";
      this.columns.forEach(function(value) {
        str += "," + value.dataIndex;
      });
      return str;
    }
  }
};
</script>

<style  >
.ant-table-wrapper {
  height: 100%;
  width: 100%;
  position: relative;
}
.ant-spin-nested-loading {
  height: 100%;
}
.ant-spin-container {
  height: 100%;
  padding-bottom: 60px;
}
.ant-table-content {
  height: 100%;
}
.ant-table-scroll {
  height: 100%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #e8e8e8;
  border-right: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  border-radius: 3px;
}
.ant-table {
  height: 100%;
}
.ant-table-body {
  flex: 1;
  margin-left: -1px;
  margin-right: -1px;
  margin-bottom: -1px;
}

.ant-table-header.ant-table-hide-scrollbar {
  margin-left: -1px;
  margin-right: -1px;
  margin-bottom: -1px;
}
.ant-pagination.mini.ant-table-pagination {
  /* position: absolute; */
  /* display: none; */
}

.ant-table-placeholder{
      position: absolute!important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none!important;
}
</style>