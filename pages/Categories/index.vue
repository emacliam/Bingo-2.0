<template>
  <main>
      <div class="max-w-full max-h-full mt-4">
          <div class="max-h-full max-w-6xl flex-1">
              <div class="rounded-lg max-w-4xl h-64 relative m-auto">
                <Slider/>
              </div>
              <div class="flex flex-wrap max-w-full" >
                <div v-for="i in 10" :key="i" class="max-w-sm p-4 m-auto">
                <div class="w-full mx-4 h-64 rounded-md overflow-hidden bg-cover bg-center md:w-full" style="background-image: url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')">
                    <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div class="px-10 max-w-xl">
                            <h2 class="text-2xl text-white font-semibold">Back Pack</h2>
                            <p class="mt-2 text-gray-400">Lorem </p>
                            <button class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <nuxt-link to="/Categories/1">Shop Now</nuxt-link>
                                <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                        </div>
                </div>
            </div>
                </div>

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