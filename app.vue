<template>
  <div>
    <!-- <AlgoliaDocSearch :options="docSearch" /> -->
    <ais-instant-search index-name="test_index" :search-client="algolia">
      <ais-search-box />
      <ais-hits />
    </ais-instant-search>
    <NuxtWelcome />
  </div>
</template>

<script setup>
import { AisInstantSearch, AisSearchBox, AisHits } from 'vue-instantsearch/vue3/es'
// const { algolia: { docSearch } } = useRuntimeConfig()
const { result, search } = useSearch('test_index') // pass your index as param

const algolia = useAlgolia()

onMounted(async () => {
  await search({ query: 'Samsung' });
})
</script>
