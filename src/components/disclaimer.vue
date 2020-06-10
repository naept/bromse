<template>
  <div v-if="display">
    <article class="message is-info">
      <div class="message-header">
        <p>{{ $t('disclaimerTitle') }}</p>
        <button class="delete" aria-label="delete" @click="close"></button>
      </div>
      <div class="message-body">
        <p>{{ $t('disclaimerMessage1') }}</p>
        <p>{{ $t('disclaimerMessage2') }}</p>
        <ol style="margin-left: 2.5rem;">
          <li>{{ $t('disclaimerMessage3') }}</li>
          <li>{{ $t('disclaimerMessage4') }}</li>
          <li>{{ $t('disclaimerMessage5') }}</li>
        </ol>
        <p>{{ $t('disclaimerMessage6') }}</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    display: Boolean,
  },

  methods: {
    close() {
      this.$emit('closeDisclaimer')
    },
  },
}
</script>

<style scoped>
.message {
  max-width: 600px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 1rem;
}
</style>
