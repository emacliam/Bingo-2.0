<template>
  <main>
      <div class="max-w-full mx-4 bg-blue-700 h-12 rounded flex flex-col justify-center">
          <div class="bg-gray-200 flex h-8 max-w-full mx-2 items-center px-2 text-sm">
             <div class="border-r border-gray-700 px-1 text-center w-32">Clothing</div>
             <div class="border-r border-gray-700 px-1 text-center w-32">Tech</div>
             <div class="border-r border-gray-700 px-1 text-center w-32">Farming</div>
             <div class="border-r border-gray-700 px-1 text-center w-32">Services</div>
             <div class="border-r border-gray-700 px-1 text-center w-32">Food</div>
             <div class="px-1 text-center w-32">Real Estate</div>
          </div>

      </div>
      <div class="mt-3 max-w-md m-auto">
                <h2 class="san">Clothing</h2>
      </div>
      <div class="flex border max-w-full max-h-full mt-4">
          <div class="max-h-full border w-64">
             <span class="text-sm text-blue-700">Clothing</span>
             <div class="ml-4 text-sm" v-for="i in 10" :key="i">
                 <nuxt-link to="">Jeans</nuxt-link>
             </div>

          </div>
          <div class="max-h-full border max-w-6xl flex-1">
              <div class="rounded-lg max-w-4xl h-64 mx-8 relative">
                <Slider/>
              </div>

          </div>

      </div>
  </main>
</template>

<script>
import Slider from "~/components/Slider";
export default {
    components: {
      Slider
    }

}
</script>

<style scoped>
.san {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;

}
.san:before, .san:after {
  background-color: rgb(156, 151, 151);
  content: '\a0';
  flex-grow: 1;
  height: 1px;
  position: relative;
  top: 0.5em;

}
.san:before {
  margin-right:10px;

}
.san:after {
  margin-left:10px;

}

</style>