<template>
  <main>
      <!-- component -->
<div class="p-5">
    <div class="mt-2">
        <div class="flex flex-col md:flex-row border-b border-gray-200 pb-4 mb-4">
            <div class=" mr-56 font-bold h-48 mx-2 mt-3 text-gray-800 flex flex-col justify-between">
                <span class="bg-red-400 text-white text-center px-2 py-1 cursor-pointer rounded-full text-sm">Logout</span>
                </div>
            <div class="flex-1 flex flex-col">
                <div class="w-full flex-1 mx-2">
                    <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                        <input placeholder="Username" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "> </div>
                </div>
                <div class="w-full flex-1 mx-2">
                    <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                        <input placeholder="Email" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "> </div>
                </div>
                <div class="w-full flex-1 mx-2">
                    <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                        <input placeholder="Password" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "> </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col md:flex-row">
            <div class="w-64 mx-2 font-bold h-6 mt-3 text-gray-800"></div>
            <div class="flex-1 flex flex-col md:flex-row">
                <button class="text-sm  mx-2 w-32  focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer
        hover:bg-blue-700 hover:text-blue-100
        bg-blue-100
        text-blue-700
        border duration-200 ease-in-out
        border-blue-600 transition">Change</button>
            </div>
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

</style>