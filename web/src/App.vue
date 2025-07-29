<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { api } from '@/utils/trpc'

defineProps<{
  msg: string
}>()

const greeting = ref('')

onMounted(async () => {
  greeting.value = await api.greeting.hello.query()
})

</script>

<template>
  <h1>{{ greeting }}</h1>
</template>

<style scoped></style>
