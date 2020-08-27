<template>
  <main class="mt-64 mr-8">
      <div>
          <div class="fade_rule"></div>
          <div class="flex items-center mt-4 justify-between">
              <span class="font-bold text-gray-700 text-sm">Recommanded By Bingo:</span>
              <nuxt-link to="/Recommanded" class="text-blue-600 text-md">See All</nuxt-link>
          </div>
          <div v-for="i in 4" :key="i">
            <nuxt-link to="" class="flex items-center mx-1 mt-3 justify-between hover:bg-gray-400 rounded-lg p-2">
            <div class="flex items-center">
            <img src="https://avatars0.githubusercontent.com/u/38799309?v=4" alt="" class="rounded-full w-8 h-8 bg-gray-500">
            <span class="ml-4">Innscor Group</span>
            </div>
        </nuxt-link>
          </div>
      </div>

       <div>
         <div class="fade_rule"></div>
          <div class="flex items-center mt-4 justify-between">
              <span class="font-bold text-gray-700 text-sm">Trending Bingo:</span>
              <nuxt-link to="/Trending" class="text-blue-600 text-md">See All</nuxt-link>
          </div>
          <div v-for="i in 4" :key="i">
            <nuxt-link to="" class="flex items-center mx-1 mt-3 justify-between hover:bg-gray-400 rounded-lg p-2">
            <div class="flex items-center">
            <img src="https://avatars0.githubusercontent.com/u/38799309?v=4" alt="" class="rounded-full w-8 h-8 bg-gray-500">
            <span class="ml-4">Innscor Group</span>
            </div>
        </nuxt-link>
          </div>
      </div>

       <div>
          <div class="fade_rule"></div>
          <div class="flex items-center mt-4 justify-between">
              <span class="font-bold text-gray-700 text-sm">Suggested For You:</span>
              <nuxt-link to="/Suggested" class="text-blue-600 text-md">See All</nuxt-link>
          </div>
          <div v-for="i in 4" :key="i">
            <nuxt-link to="" class="flex items-center mx-1 mt-3 justify-between hover:bg-gray-400 rounded-lg p-2">
            <div class="flex items-center">
            <img src="https://avatars0.githubusercontent.com/u/38799309?v=4" alt="" class="rounded-full w-8 h-8 bg-gray-500">
            <span class="ml-4">Innscor Group</span>
            </div>
        </nuxt-link>
          </div>
      </div>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>

.fade_rule {
        height: 1px;
        background-color: #E6E6E6;
        width: auto;
        margin: 0 auto;
        background-image: linear-gradient(left , white 2%, #E6E6E6 50%, white 98%);
        background-image: -o-linear-gradient(left , white 2%, #E6E6E6 50%, white 98%);
        background-image: -moz-linear-gradient(left , white 2%, #E6E6E6 50%, white 98%);
        background-image: -webkit-linear-gradient(left , white 2%, #E6E6E6 50%, white 98%);
        background-image: -ms-linear-gradient(left , white 2%, #E6E6E6 50%, white 98%);
        background-image: -webkit-gradient( linear, right bottom, left bottom, color-stop(0.02, white), color-stop(0.5, gray), color-stop(0.98, white) );
}

</style>