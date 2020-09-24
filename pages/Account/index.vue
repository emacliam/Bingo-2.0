<template>
  <main class="max-w-4xl m-auto ">
    <div class="max-w-4xl">
      <span class="border-b-2 border-orange-600">My Account</span>
      <div class="max-w-4xl">
        <hr />
      </div>
    </div>
    <div class="flex-col flex-wrap">
      <div
        class="flex my-4 bg-white shadow-lg rounded-lg mx-4 md:mx-auto max-w-md md:max-w-xl "
      >
        <div class="flex flex-col items-start px-4 py-6">
          <h1 class="text-md font-semibold mb-3">Orders</h1>

          <ul>
            <li class="text-blue-700 mb-1">
              <a
                class="border-b-2 border-transparent m-1 hover:border-orange-600"
                href="/Account/Orders"
                >Orders</a
              >
            </li>
            <li class="text-blue-700 mb-1">
              <a
                class="border-b-2 border-transparent m-1 hover:border-orange-600"
                href=""
                >Invoices</a
              >
            </li>
            <li class="text-blue-700 mb-1">
              <a
                class="border-b-2 border-transparent m-1 hover:border-orange-600"
                href=""
                >My Product Reviews</a
              >
            </li>
            <li class="text-blue-700 mb-1"><a class="ord" href=""></a></li>
          </ul>
        </div>
      </div>

      <div
        class="flex my-4 bg-white shadow-lg rounded-lg mx-4 md:mx-auto max-w-md md:max-w-xl "
      >
        <div class="flex flex-col items-start px-4 py-6">
          <h1 class="text-md font-semibold mb-3">Customer Information</h1>

          <ul>
            <li class="text-blue-700 mb-1">
              <a
                class="border-b-2 border-transparent m-1 hover:border-orange-600"
                href="/Account/PersonalInfo"
                >Personal Details & Address Book</a
              >
            </li>
            <li class="text-blue-700 mb-1">
              <a
                class="border-b-2 border-transparent m-1 hover:border-orange-600"
                href=""
                >My Product Reviews</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div
        class="flex my-4 bg-white shadow-lg rounded-lg mx-4 md:mx-auto max-w-md md:max-w-xl "
      >
        <div class="flex flex-col items-start px-4 py-6">
          <h1 class="text-md font-semibold mb-3">My Lists</h1>

          <ul>
            <li class="text-blue-700 mb-1">
              <a
                class="border-b-2 border-transparent m-1 hover:border-orange-600"
                href="/Account/wishlist"
                >My Wishlists</a
              >
            </li>
            <li class="text-blue-700 mb-1">
              <a
                class="border-b-2 border-transparent m-1 hover:border-orange-600"
                href="/Account/Cart"
                >Cart</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped></style>
