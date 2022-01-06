<template>
  <div>
    {{ result }}
    <NuxtWelcome />
  </div>
</template>

<script setup>
const { result, search } = useSearch('test_index') // pass your index as param

onMounted(async () => {
  await search({ query: 'Samsung' });
})
</script>
