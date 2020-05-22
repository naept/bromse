<template>
  <div id="app">
    <topbar />
    <pageTitle />
    <bromse />
  </div>
</template>

<script>
import bromse from './components/bromse.vue'
import pageTitle from './components/header.vue'
import topbar from './components/topbar.vue'

export default {
  name: 'App',
  components: {
    bromse,
    pageTitle,
    topbar,
  }
}
</script>
