<template>
  <div class="role-manage">
    <div class="query-form">
      <el-form ref="form" :inline="true" :model="queryForm">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="queryForm.roleName" placeholder="请输入角色名称" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getRoleList">查询</el-button>
          <el-button @click="handleReset('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="base-table">
      <div class="action">
        <el-button type="primary" @click="handleAdd">新增</el-button>
      </div>
      <el-table :data="roleList">
        <el-table-column
          v-for="item in columns"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :formatter="item.formatter"
        />
        <el-table-column fixed="right" label="操作" width="200">
          <template #default="scope">
            <el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button type="text" size="small">设置权限</el-button>
            <el-button type="text" size="small" @click="handleDel(scope.row._id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        background
        layout="prev, pager, next"
        :total="pager.total"
        :page-size="pager.pageSize"
        @current-change="handleCurrentChange"
      />
    </div>

    <el-dialog title="角色新增" v-model="showModal">
      <el-form
        ref="dialogForm"
        :model="roleForm"
        label-width="100px"
        :rules="rules"
      >
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="roleForm.roleName" placeholder="请输入角色名称" />
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input
            type="textarea"
            :rows="2"
            v-model="roleForm.remark"
            placeholder="请输入备注"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClose">取 消</el-button>
          <el-button type="primary" @click="handleSubmit">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import utils from '../utils/utils';

export default {
  name: 'role',
  data() {
    return {
      queryForm: {
        roleName: ""
      },
      roleList: [],
      pager: {
        total: 0,
        pageSize: 10,
        pageNum: 1
      },
      showModal: false,
      action: "create",
      roleForm: {},
      rules: {
        roleName: [
          {
            required: true,
            message: "请输入角色角色名称",
          },
        ],
      },
      columns: [
        {
          label: "角色名称",
          prop: "roleName",
          width: 150,
        },
        {
          label: "备注",
          prop: "remark",
        },
        {
          label: "权限列表",
          prop: "permissionList",
          width: 200,        
        },
        {
          label: "创建时间",
          prop: "createTime",
          formatter(row, column, value) {
            return utils.formateDate(new Date(value));
          },
        },
      ],
      showModal: false
    }
  },
  mounted() {
    this.getRoleList()
  },
  methods: {
    // 菜单列表初始化
    async getRoleList() {
      try {
        let {list, page } = await this.$api.getRoleList({
          ...this.queryForm,
          ...this.pager
        })
        this.roleList = list
        this.pager.total = page.total

      } catch (error) {
        throw new Error(error)
      }      
    },
    // 表单重置
    handleReset(form) {
      this.$refs[form].resetFields();
    },
    // 角色添加
    handleAdd() {
      this.action = "create";
      this.showModal = true;
    },
    // 角色编辑
    handleEdit(row) {
      this.action = "edit";
      this.showModal = true;
      this.$nextTick(() => {
        this.roleForm = {
          _id: row._id,
          roleName: row.roleName,
          remark: row.remark,
        };
      });
    },
    async handleDel(_id) {
      await this.$api.roleOperate({ _id, action: "delete" });
      this.$message.success("删除成功");
      this.getRoleList();
    },
    // 菜单操作提交
    handleSubmit() {
      this.$refs.dialogForm.validate(async (valid) => {
        if (valid) {
          let { roleForm, action } = this;
          let params = { ...roleForm, action };
          let res = await this.$api.roleOperate(params);
          if (res) {
            this.showModal = false;
            if(action === 'create') {
              this.$message.success("创建成功");
            } else {
              this.$message.success("编辑成功");
            }
            this.handleReset("dialogForm");
            this.getRoleList();
          }
        }
      });
    },
    // 弹框关闭
    handleClose() {
      this.showModal = false
      this.handleReset('dialogForm')
    },
    handleCurrentChange(current) {
      this.pager.pageNum = current;
      this.getRoleList();
    },
  }
}
</script>

<style lang="scss">
.role-manage {
  .base-table {
    .el-table {
      .el-button + .el-button {
        margin-left: 0px;
      }
    }
  }
}
</style>
