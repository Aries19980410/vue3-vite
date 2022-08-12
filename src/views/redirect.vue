<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
const router = useRoute()
onMounted(() => {
  const { params, query } = router
  const { path } = params
  console.log(router)
  // router.replace({ path: '/' + path, query })
})
</script>
