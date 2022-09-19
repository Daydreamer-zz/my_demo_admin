<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="bookList"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column label="ID" align="center">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="书名" align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="作者" align="center">
        <template slot-scope="scope">
          {{ scope.row.author }}
        </template>
      </el-table-column>
      <el-table-column label="创建日期" align="center">
        <template slot-scope="scope">
          {{ scope.row.created_at }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList, deleteBook } from '@/api/books'

export default {
  methods: {
    handleEdit(row) {
      console.log(row)
    },

    handleDelete(row) {
      this.$confirm('此操作将执行删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: false
      }).then(() => {
        deleteBook(row.id)
        this.$message({
          type: 'success',
          message: '删除成功'
        })
        this.fetchData()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },

    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.bookList = response.results
        this.listLoading = false
      })
    }
  },

  data() {
    return {
      bookList: null,
      listLoading: true
    }
  },

  created() {
    this.fetchData()
  }
}
</script>
