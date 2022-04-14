<template>
  <m-header></m-header>
  <m-tab></m-tab>
</template>

<script>
  import Header from '@/components/header/header'
  import Tab from '@/components/tab/tab'
  export default {
    components: {
      MHeader: Header,
      MTab: Tab
    }
  }
</script>
