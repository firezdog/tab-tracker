<template>
  <panel class="Panel" title="Tab">
    <textarea
    multi-line
    readonly
    v-model="song.tab">
    </textarea>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: ['song'],
  components: {Panel}
}
</script>

<style scoped>
.Panel {
  overflow: hidden;
  height: 650px;
}
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  border-style: none;
  height: 600px;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
