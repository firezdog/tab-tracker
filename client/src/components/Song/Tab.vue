<template>
  <panel title="Tab">
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
</style>
