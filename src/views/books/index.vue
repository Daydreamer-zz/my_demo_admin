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
      <el-table-column label="更新日期" align="center">
        <template slot-scope="scope">
          {{ scope.row.updated_at }}
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
            @click="dialogFormVisible = true;bookForm = scope.row">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="编辑" :visible.sync="dialogFormVisible">
      <el-form :model="bookForm" status-icon ref="bookForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="id" prop="id">
          <el-input type="text" v-model="bookForm.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="书名" prop="name">
          <el-input type="text" v-model="bookForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="author">
          <el-input type="text" v-model="bookForm.author" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleUpdate(bookForm.id)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getBooklist, deleteBook, updateBook } from '@/api/books'

export default {
  data() {
    return {
      bookList: null,
      listLoading: true,
      dialogFormVisible: false,
      bookForm: {
        id: '',
        name: '',
        author: ''
      }
    }
  },
  methods: {
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
    handleUpdate(book_id) {
      this.dialogFormVisible = false
      // console.log(book_id, this.bookForm)
      updateBook(book_id, this.bookForm).then(response => {
        this.fetchData()
      })
    },
    fetchData() {
      this.listLoading = true
      getBooklist().then(response => {
        this.bookList = response.results
        this.listLoading = false
      })
    }
  },
  created() {
    this.fetchData()
  }
}
</script>
