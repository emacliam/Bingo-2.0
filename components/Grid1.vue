<template>
<main class="p-2 max-w-full flex flex-col max-h-full example">
    <div class="bg-white rounded-lg z-40 m-3" v-for="i in 10" :key="i">
 <div class="mx-4 my-2 flex justify-between">
   <div class="flex">
     <img src="https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG" alt="" class="w-8 h-8 rounded-full m-2">
      <div class="flex flex-col">
            <span class="font-bold text-lg">Maceware Tech:</span>
            <span class="ml-4 text-gray-600 italic">Today at 5pm</span>
        </div>
   </div>
        <nuxt-link to="" class="more w-8 h-8">
<svg class="" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2" fill="#6563ff"/><circle cx="5" cy="12" r="2" fill="#6563ff"/><circle cx="19" cy="12" r="2" fill="#6563ff"/></svg>
        </nuxt-link>
    </div>
    <div class="w-full flex flex-col">
      <div class="bg-gray-400 max-w-full h-64">
          <img src="https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG" alt="" class="h-full w-full m-auto">
      </div>
      <span class="text-gray-700 italic ml-4">65,000 Reactions</span>
    </div>
    <div>
        <div class="w-full px-24 mt-4">
         <hr>
        </div>
    </div>
    </div>

</main>
</template>

<script>
export default {

}
</script>

<style scoped>
.more:hover {
  align-items: center;
  background: linear-gradient(-45deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25));
  box-shadow: 12px 12px 16px 0 rgba(255, 254, 254, 0.678),
   -8px -8px 12px 0 rgba(255, 255, 255, 0.801);
  border-radius: 50px;
  display: flex;
  justify-content: center;
}

</style>