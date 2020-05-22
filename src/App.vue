<template>
  <div id="app">
    <topbar />
    <bromse />
  </div>
</template>

<script>
import bromse from './components/bromse.vue'
import topbar from './components/topbar.vue'

export default {
  name: 'App',
  components: {
    bromse,
    topbar,
  }
}
</script>
