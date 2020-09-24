<template>
  <main class="max-w-4xl m-auto">
    <div class="flex text-xs mb-4">
      <a
        class="text-blue-700 m-1 border-b border-transparent hover:border-orange-600"
        href="/Account"
        >My Account</a
      >
      <span class="text-gray-500 m-1">/</span>
      <span class="text-gray-500 m-1">wishlist</span>
    </div>
    <div class="max-w-4xl">
      <span class="border-b-2 border-orange-600">Wishlist</span>
      <div class="max-w-4xl">
        <hr />
      </div>
    </div>
    <div class="my-6 max-w-4xl ">
      <div class="bg-blue-700 h-16 mt-8 flex justify-center items-center"></div>
      <div
        class="flex flex-col w-full p-8  bg-white shadow-lg pin-r pin-y md:max-w-4xl  lg:max-w-4xl "
      >
        <div class="flex-1">
          <table class="w-full text-sm lg:text-base" cellspacing="0">
            <thead>
              <tr class="h-12 uppercase">
                <th class="hidden md:table-cell"></th>
                <th class="text-left">Product</th>
                <th class="lg:text-right text-left pl-5 lg:pl-0">
                  <span class="lg:hidden" title="Quantity">Qtd</span>
                  <span class="hidden lg:inline">Quantity</span>
                </th>
                <th class="hidden text-right md:table-cell">Unit price</th>
                <th class="text-right">Total price</th>
                <th class="text-right"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 10" :key="i">
                <td class="hidden pb-4 md:table-cell">
                  <a href="#">
                    <img
                      src="https://limg.app/i/Calm-Cormorant-Catholic-Pinball-Blaster-yM4oub.jpeg"
                      class="w-20 rounded"
                      alt="Thumbnail"
                    />
                  </a>
                </td>
                <td>
                  <a href="#">
                    <p class="mb-2 md:ml-4">Earphone</p>
                    <form action="" method="POST">
                      <button type="submit" class="text-gray-700 md:ml-4">
                        <small class="text-red-700 font-bold"
                          >(Remove item)</small
                        >
                      </button>
                    </form>
                  </a>
                </td>
                <td class="justify-center md:justify-end md:flex mt-6">
                  <div class="w-20 h-10">
                    <div class="relative flex flex-row w-full h-8">
                      <input
                        type="number"
                        value="2"
                        class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                      />
                    </div>
                  </div>
                </td>
                <td class="hidden text-right md:table-cell">
                  <span class="text-sm lg:text-base font-medium">
                    10.00€
                  </span>
                </td>
                <td class="text-right">
                  <span class="text-sm lg:text-base font-medium">
                    20.00€
                  </span>
                </td>
                <td class="text-right">
                  <span class="text-white bg-blue-700 p-1 rounded"
                    >Add to cart</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
