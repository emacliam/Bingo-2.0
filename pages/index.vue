<template>
  <div class="container flex max-w-full">
  <div class="w-7/12">
    <Grid1/>
  </div>

  <div class="bg-gray-100 w-5/12">
     <Grid2/>
  </div>

  </div>
</template>

<script>
import Grid1 from "~/components/Grid1";
import Grid2 from "~/components/Grid2";
export default {
  layout:({ isMobile }) => isMobile ? 'mobile' : 'default',
  components:{
    Grid1,
    Grid2
  }

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
