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
  <div class="container max-w-full flex justify-between max-h-full">
    <div class="max-h-full flex-1 max-w-4xl example">
      <div class="rounded-lg max-w-2xl h-64 m-auto relative">
       <Slider/>
      </div>
      <Grid1/>
    </div>
    <div class="mr-4 w-64">
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
import Slider from "~/components/Slider";
export default {
  layout:({ isMobile }) => isMobile ? 'mobile' : 'default',

  components:{
    Grid1,
    Grid2,
    MGrid1,
    MGrid2,
    Slider
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
.example{
    overflow-y: scroll;
}
/* The emerging W3C standard
   that is currently Firefox-only */
.example{
  scrollbar-width: thin;
  scrollbar-color:transparent transparent;
}

.example:hover{
scrollbar-color:rgb(10, 61, 155) transparent;
}
/* Works on Chrome/Edge/Safari */
.example::-webkit-scrollbar {
  width: 8px;
  border-radius: 40px;
}
.example::-webkit-scrollbar-track {
  background:transparent;
}
.example::-webkit-scrollbar-thumb {
  background-color: rgb(255, 255, 255);
  border-radius: 40px;
  border: 4px solid transparent;
  height: 4px;
}
.example:hover::-webkit-scrollbar-thumb {
    background-color: rgb(162, 182, 247);
}

</style>
