<template>
  <div>
    <panel title="Lyrics">
      <textarea
      multi-line
      readonly
      v-model="lyrics">
      </textarea>
    </panel>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  components: {Panel},
  props: ['lyrics']
}
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
  white-space: pre;
}
</style>
