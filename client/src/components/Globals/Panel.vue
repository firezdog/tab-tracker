<template>
  <div class="white elevation-5">
      <v-toolbar flat dense dark class="cyan text-xs-center">
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <slot name="button"></slot>
      </v-toolbar>
    <div>
      <slot name="warning"></slot>
      <div  class="pl-4 pt-4 pr-4 pb-4">
        <slot></slot>
      </div>
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
