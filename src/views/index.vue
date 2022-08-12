<template>
  <div class="index-container">

  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter()
console.log(router.replace({ path: '/index' }))
// const { params, query } = router
// const { path } = params
console.log(router)
</script>