<template>
  <main class="w-screen">
<div>
    <div class="bg-blue-700 w-full h-24 ">
        <div class="flex items-center justify-between mx-2">
     <span class="text-white text-xl font-bold m-2">BINGO</span>
       <div class="flex items-center">
           <nuxt-link to="" class="m-2 text-white">
             Sign In
           </nuxt-link>
            <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 26 26"><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-transform:none;block-progression:tb" d="M 13 0 C 5.826231 0 1.6e-005 5.8262 0 13 C -4.2e-005 20.1738 5.826191 26 13 26 C 20.173809 26 26.000041 20.1738 26 13 C 25.999984 5.8262 20.173769 0 13 0 z M 13 1 C 19.633359 1 24.999985 6.3666 25 13 C 25.000038 19.6334 19.633396 25 13 25 C 6.366603 25 0.999962 19.6334 1 13 C 1.000015 6.3666 6.366641 1 13 1 z M 7 7 L 7 8 L 8.5039062 8 L 10.867188 15.246094 L 9.9765625 18.367188 C 9.8924425 18.663257 10.149243 19.003576 10.457031 19.003906 L 18.457031 19.003906 L 18.457031 18.003906 L 11.119141 18.003906 L 11.6875 16.009766 L 17.830078 16 L 19.947266 10.158203 L 19.007812 9.8164062 L 18.574219 11.015625 L 10.539062 11.015625 L 9.2285156 7 L 7 7 z "  font-family="sans-serif" font-weight="400" overflow="visible"/></svg>

       </div>
        </div>

       <div class="h-8 w-3/4 m-auto">
        <Search/>
       </div>

    </div>
    <div>
        bla bla bla
    </div>
</div>
  </main>
</template>

<script>
import Search from "~/components/mobile/search";
export default {
    components:{
        Search
    }

}
</script>

<style>

</style>