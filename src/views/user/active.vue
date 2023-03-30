<template/>
  <h1>pls wait</h1>
<script>
import { activateUser } from '@/api/user'

export default {
  data() {
    return {
      code: ''
    }
  },
  mounted() {
    this.code = this.$route.query.code
    activateUser(this.code).then(response => {
      this.$router.push('/login')
    })
  }
}
</script>

<style scoped>

</style>
