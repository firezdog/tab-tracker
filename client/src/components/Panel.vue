<template>
  <div class="white elevation-5">
    <v-toolbar flat dense dark class="cyan">
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
</style>
