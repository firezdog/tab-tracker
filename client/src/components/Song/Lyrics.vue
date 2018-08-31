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
export default {
  props: ['lyrics']
}
</script>

<style scoped>
</style>
