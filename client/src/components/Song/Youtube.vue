<template>
  <panel title="YouTube">
    <youtube id="youtube"
    :video-id="youtubeId"
    :player-height="350"
    :player-width="350"
    >
    </youtube>
  </Panel>
</template>

<script>
export default {
  props: ['youtubeId']
}
</script>

<style scoped>
#youtube {
  margin-top: 30px;
}
</style>
