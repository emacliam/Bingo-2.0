<template>
  <main>
<div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
    <div class="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden relative flex" style="width:414px;height:736px">
        <div class="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
         <nuxt/>
        </div>
        <div class="bg-white absolute bottom-0 w-full border-t border-gray-200 flex">
            <a href="#" class="flex flex-grow items-center justify-center p-2 text-indigo-500 hover:text-indigo-500">
                <div class="text-center">
                    <span class="block h-8 text-3xl leading-8">
                        <i class="mdi mdi-newspaper-variant-outline"></i>
                    </span>
                    <span class="block text-xs leading-none">Today</span>
                </div>
            </a>
            <a href="#" class="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500">
                <div class="text-center">
                    <span class="block h-8 text-3xl leading-8">
                        <i class="mdi mdi-apps"></i>
                    </span>
                    <span class="block text-xs leading-none">Categories</span>
                </div>
            </a>
            <a href="#" class="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500">
                <div class="text-center">
                    <span class="block h-8 text-3xl leading-8">
                        <i class="mdi mdi-star-outline"></i>
                    </span>
                    <span class="block text-xs leading-none">Favorites</span>
                </div>
            </a>
            <a href="#" class="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500">
                <div class="text-center">
                    <span class="block h-8 text-3xl leading-8">
                        <i class="mdi mdi-magnify"></i>
                    </span>
                    <span class="block text-xs leading-none">Search</span>
                </div>
            </a>
        </div>
    </div>
</div>
  </main>
</template>

<script>
export default {

}
</script>

<style>
.rounded-xl {
    border-radius: 1rem
}
</style>