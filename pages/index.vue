<template>
<main>
  <template v-if="isMobile" >
    <div class="pb-12 ">
<MGrid2/>
    </div>
    <div class="pb-24">
<MGrid1/>
    </div>
  </template>
  <template v-else>
  <div class="container flex max-w-full flex-wrap">
  <div class="w-7/12">
    <Grid1/>
  </div>

  <div class="bg-gray-100 w-5/12">
     <Grid2/>
  </div>

  </div>
  </template>
</main>
</template>

<script>
import Grid1 from "~/components/Grid1";
import Grid2 from "~/components/Grid2";
import MGrid1 from "~/components/mobile/MGrid1";
import MGrid2 from "~/components/mobile/MGrid2";
export default {
  layout:({ isMobile }) => isMobile ? 'mobile' : 'default',

  components:{
    Grid1,
    Grid2,
    MGrid1,
    MGrid2,
  },
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
.grid1{
width:60%;
}
.grid2{
width: 40%;
}

</style>
