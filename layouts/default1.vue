<template>
  <main>
<div class="w-full flex flex-col text-gray-700">
  <div class="flex flex-col px-4 md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 bg-blue-700 h-16 max-w-full">
    <div class="p-4 flex flex-row items-center justify-between">
      <a href="#" class="text-white text-xl font-bold">BINGO</a>
      <button class="md:hidden rounded-lg focus:outline-none" @click="open = !open">
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
          <path v-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          <path v-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
      <div class="relative ml-56 w-5/12">
          <input title="Search Bar" aria-label="search bar" role="search" class="pr-8 pl-4 py-2 border-blue-600 border rounded-md cursor-pointer focus:border-blue-600 focus:cursor-text w-full placeholder-transparent focus:placeholder-blue-500" type="text" placeholder="Search" />
          <i class="pointer-events-none absolute top-0 right-0 h-full flex items-center pr-3">
            <svg class="fill-current w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
            </svg>
          </i>
        </div>
    <div :class="{'flex-col': open, 'hidden': !open}" class="flex md:hidden ">
       <a class="px-4 py-2 mt-2 text-sm font-semibold m-auto" href="#">Cart</a>
       <div class="mx-24">
         <hr>
       </div>
       <a class="px-4 py-2 mt-2 text-sm font-semibold m-auto" href="#">Wishlist</a>
       <div class="mx-24">
         <hr>
       </div>
       <a class="px-4 py-2 mt-2 text-sm font-semibold m-auto" href="#">Account</a>
        <div class="mx-24">
         <hr>
       </div>
         <a class="px-4 py-2 mt-2 text-sm font-semibold m-auto" href="#">Settings</a>
       <div class="mx-24">
         <hr>
       </div>
       <a class="px-4 py-2 mt-2 text-sm font-semibold m-auto" href="#">Logout</a>
       <div class="">
         <hr>
       </div>
    </div>

  <nav class="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row hidden">
    <nuxt-link to="" class="m-2 text-white">
<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 26 26"><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-transform:none;block-progression:tb" d="M 13 0 C 5.826231 0 1.6e-005 5.8262 0 13 C -4.2e-005 20.1738 5.826191 26 13 26 C 20.173809 26 26.000041 20.1738 26 13 C 25.999984 5.8262 20.173769 0 13 0 z M 13 1 C 19.633359 1 24.999985 6.3666 25 13 C 25.000038 19.6334 19.633396 25 13 25 C 6.366603 25 0.999962 19.6334 1 13 C 1.000015 6.3666 6.366641 1 13 1 z M 7 7 L 7 8 L 8.5039062 8 L 10.867188 15.246094 L 9.9765625 18.367188 C 9.8924425 18.663257 10.149243 19.003576 10.457031 19.003906 L 18.457031 19.003906 L 18.457031 18.003906 L 11.119141 18.003906 L 11.6875 16.009766 L 17.830078 16 L 19.947266 10.158203 L 19.007812 9.8164062 L 18.574219 11.015625 L 10.539062 11.015625 L 9.2285156 7 L 7 7 z " font-family="sans-serif" font-weight="400" overflow="visible"/></svg>
  </nuxt-link>
      <div class="relative m-2">
        <button @click="drop = !drop" class=" flex items-center text-white focus:outline-none">
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="40" height="40" viewBox="0 0 128 128"><path d="M64,0a64,64,0,1,0,64,64A64.07239,64.07239,0,0,0,64,0Zm0,124a60,60,0,1,1,60-60A60.06812,60.06812,0,0,1,64,124Z"/><path d="M77.78662,56.12677a22.05464,22.05464,0,0,1-4.08063,2.61A28.046,28.046,0,0,1,92,85v16a2.00229,2.00229,0,0,1-2,2H38a2.00229,2.00229,0,0,1-2-2V85A28.046,28.046,0,0,1,54.294,58.73676a22.05464,22.05464,0,0,1-4.08063-2.61A32.03946,32.03946,0,0,0,32,85v16a6.00656,6.00656,0,0,0,6,6H90a6.00656,6.00656,0,0,0,6-6V85A32.03946,32.03946,0,0,0,77.78662,56.12677Z"/><path d="M64,57A18,18,0,1,0,46,39,18.02062,18.02062,0,0,0,64,57Zm0-32A14,14,0,1,1,50,39,14.01573,14.01573,0,0,1,64,25Z" font-family="sans-serif" font-weight="400" overflow="visible"/></svg>
          <svg  viewBox="0 0 20 20" :class="{'rotate-180': drop, 'rotate-0': !drop}" class="fill-current inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div v-show="drop" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
          <div class="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
            <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Wishlist</a>
            <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Account</a>
            <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Settings</a>
            <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <div class="pt-8 flex">
      <div class="h-full fixed w-24 bg-blue-600 box-border">
     sidebar
   </div>
    <nuxt/>
  </div>
 <!--  <div class="max-w-full  h-24">
    <div class="max-w-full text-center bg-gray-800">
 <a href="#" v-scroll-to="'#element'" class="text-white text-center h-12 m-auto">Back to top</a>
    </div>

  </div> -->
</div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      open:false,
      drop:false
    }
  },
  methods: {
    backtotop(){
      console.log('yeah')
    scrollToTop: true

    }
  },

}
</script>

<style scoped>
#element {
  margin-top: 0px;
}

</style>