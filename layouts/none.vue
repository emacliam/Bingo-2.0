<template>
  <main class="flex flex-col bg-gray-200">
      <div class="nav bg-blue-800 max-w-full mb-3">
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
      <div class="absolute ml-24 w-3/12">
          <input title="Search Bar" aria-label="search bar" role="search" class="pr-8 pl-4 py-2 rounded-full cursor-pointer focus:border-blue-600 focus:cursor-text w-full placeholder-transparent focus:placeholder-blue-500" type="text" placeholder="Search" />
          <i class="pointer-events-none absolute top-0 right-0 h-full flex items-center pr-3">
            <svg class="fill-current w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
            </svg>
          </i>
        </div>

    <div :class="{'flex-col': open, 'hidden': !open}" class="flex md:hidden relative bg-white z-50 rounded-b-lg">
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
       <a class="px-4 py-2 mt-2 text-sm font-semibold m-auto bg-blue-700 rounded-lg mb-2 text-white" href="#">Sign In</a>
    </div>

  <nav class="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row hidden md:items-center">
	  <div class="mr-24 flex flex-col text-sm text-white font-bold opacity-75">
			<span>Sell On Bingo</span>
			<nuxt-link to="" class="underline hover:text-blue-800">
				Create a business Profile
			</nuxt-link>
		</div>
	  <nuxt-link to="/Login" :class="$nuxt.$route.name == 'Login' ? 'text-white font-bold opacity-100 text-lg':''" class="border-r border-gray-500 px-2 text-sm text-gray-100 opacity-75 hover:opacity-100 hover:text-white duration-300 transform ease-in">Login</nuxt-link>
	  <nuxt-link to="/Register" :class="$nuxt.$route.name == 'Register' ? 'text-white font-bold opacity-100 text-lg':''" class="border-r border-gray-500 px-2 text-sm text-gray-100 opacity-75 hover:opacity-100 hover:text-white duration-300 transform ease-in">Register</nuxt-link>
<!--   account dropdown -->
      <div class="relative m-2">
        <button @click="drop = !drop" class=" flex items-center text-white focus:outline-none">
          <span class="border-gray-500 opacity-75 text-sm hover:opacity-100 text-gray-100 hover:text-white duration-300 transform ease-in">My Account</span>
           <svg    :class="{'rotate-180': drop, 'rotate-0': !drop}" class="inline stroke-current fill-current text-white w-5 h-5 mt-1 pt-1 ml-1 transition-transform duration-200 transform md:-mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,8H7a1,1,0,0,0-.768,1.641l5,6a1,1,0,0,0,1.536,0l5-6A1,1,0,0,0,17,8Zm-5,5.438L9.135,10h5.73Z"/></svg>
	    </button>
        <div v-show="drop" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
          <div class="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
            <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Account</a>
            <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Sign In</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
      </div>
      <div class="flex container max-w-full">
   <div class="max-h-full flex-1 max-w-full">
   <nuxt/>
   </div>
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

}
</script>
/* not dont scope the css */
<style>
.nav{
    height: 10vh;
}
.container{
   height: auto;
}

.sidebar {
  box-shadow:
    12px 12px 16px 0 rgba(0, 0, 0, 0.25);
}
.sidesvg:hover{
  border-left: 3px blue solid;
}
.search{
	top:20%;
}
</style>