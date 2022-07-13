<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
    >
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/books'

export default {
  data() {
    return {
      listLoading: true,
      list: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getList().then(response => {
        this.list = response.results
        this.listLoading = false
      })
    }
  }
}
</script>
