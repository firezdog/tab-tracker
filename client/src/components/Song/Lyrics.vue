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
</style>
