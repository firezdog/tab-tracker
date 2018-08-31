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
export default {
  props: ['song']
}
</script>

<style scoped>
</style>
