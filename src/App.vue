<script setup lang="ts">
import Main from './components/Main.vue'
import Header from './components/Header.vue'
</script>

<template>
  <div >
    <el-container>
      <el-header height="120px" ><Header></Header></el-header>
      <el-main><Main></Main></el-main>
    </el-container>
  </div>
</template>

<style scoped>
</style>
