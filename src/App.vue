<template>
  <div id="app">
    <topbar />
    <pageTitle />
    <disclaimer
      :display="displayDisclaimer"
      @closeDisclaimer="closeDisclaimer"
    />
    <bromse @showDisclaimer="showDisclaimer" />
    <info />
    <legals />
  </div>
</template>

<script>
import bromse from './components/bromse.vue'
import pageTitle from './components/header.vue'
import topbar from './components/topbar.vue'
import disclaimer from './components/disclaimer.vue'
import info from './components/info.vue'
import legals from './components/legals.vue'
import Cookies from 'js-cookie'

export default {
  name: 'App',
  components: {
    bromse,
    pageTitle,
    topbar,
    disclaimer,
    info,
    legals,
  },

  data() {
    return {
      displayDisclaimer: true,
    }
  },

  mounted() {
    let firstTime = Cookies.get('firstTime')
    if (firstTime === 'false') {
      this.displayDisclaimer = false
    } else {
      this.displayDisclaimer = true
    }
  },

  methods: {
    closeDisclaimer() {
      Cookies.set('firstTime', false, { expires: 1825 })
      this.displayDisclaimer = false
    },

    showDisclaimer() {
      Cookies.set('firstTime', true, { expires: 1825 })
      this.displayDisclaimer = true
    },
  },
}
</script>
