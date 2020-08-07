<template>
  <main>
signup page
  </main>
</template>

<script>
export default {
layout:({ isMobile }) => isMobile ? 'mobile' : 'default',
data() {
  return {
    isMobile:Boolean
  }
},
 asyncData({ isMobile }) {
     return{
       isMobile:isMobile
     }
  },
}
</script>

<style>

</style>