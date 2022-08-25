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
      alert(row)
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
