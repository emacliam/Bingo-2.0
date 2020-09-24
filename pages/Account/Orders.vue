<template>
  <main class="max-w-4xl m-auto">
    <div class="flex text-xs mb-4">
      <a
        class="text-blue-700 m-1 border-b border-transparent hover:border-orange-600"
        href="/Account"
        >My Account</a
      >
      <span class="text-gray-500 m-1">/</span>
      <span class="text-gray-500 m-1">Orders</span>
    </div>
    <div class="max-w-4xl">
      <span class="border-b-2 border-orange-600">Orders</span>
      <div class="max-w-4xl">
        <hr />
      </div>
    </div>
    <div>
      <div class="h-16 mt-8 max-w-4xl bg-blue-700"></div>
      <div
        class="h-20 max-w-4xl bg-gray-300 flex justify-evenly items-center text-sm"
      >
        <div class="text-gray-500 flex flex-col">
          <span>ORDERS PLACED</span>
          <span>47</span>
        </div>
        <div class="text-gray-500 flex flex-col">
          <span>TOTAL</span>
          <span>$56</span>
        </div>
        <div class="text-gray-500 flex flex-col">
          <span>DELIVERED TO</span>
          <span></span>
        </div>
        <div class="text-gray-500 flex flex-col">
          <span>ORDER ID</span>
          <div>
            <span>Order details</span>
            <span>Invoice</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
