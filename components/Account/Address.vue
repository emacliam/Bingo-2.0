<template>
  <main>
    <!-- component -->
    <div class="p-5">
      <div class="mt-2">
        <p class="my-2 text-orange-500">
          Note: We will use this information when delivering your orders
        </p>
        <div
          class="flex flex-col md:flex-row border-b border-gray-200 pb-4 mb-4"
        >
          <div class="w-64 font-bold h-6 mx-2 mt-3 text-gray-800">
            Full Name
          </div>
          <div class="flex-1 flex flex-col md:flex-row">
            <div class="w-full flex-1 mx-2">
              <div
                class="my-2 p-1 bg-white flex border border-gray-200 rounded"
              >
                <input
                  placeholder="First Name"
                  class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                />
              </div>
            </div>
            <div class="w-full flex-1 mx-2">
              <div
                class="my-2 p-1 bg-white flex border border-gray-200 rounded"
              >
                <input
                  placeholder="Last Name.."
                  class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row pb-4 mb-4">
          <div class="w-64 font-bold h-6 mx-2 mt-3 text-gray-800">
            Address
            <div class="text-xs font-normal leading-none text-orange-500">
              Your delivery address
            </div>
          </div>
          <div class="flex-1">
            <div class="flex flex-col md:flex-row">
              <select class="mx-2 flex-1 h-10 mt-2 form-select w-full">
                <option value="US">US</option>
                <option value="Italy">Italy</option>
                <option value="Spain">Spain</option>
                <option value="China">China</option>
              </select>
              <div class="w-full flex-1 mx-2">
                <div
                  class="my-2 p-1 bg-white flex border border-gray-200 rounded"
                >
                  <input
                    placeholder="State"
                    class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                  />
                </div>
              </div>
              <div class="w-full flex-1 mx-2">
                <div
                  class="my-2 p-1 bg-white flex border border-gray-200 rounded"
                >
                  <input
                    placeholder="Zip Code"
                    class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                  />
                </div>
              </div>
            </div>
            <div class="m-2">
              <div class="w-full flex-1">
                <div
                  class="my-2 p-1 bg-white flex border border-gray-200 rounded"
                >
                  <input
                    placeholder="Province"
                    class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                  />
                </div>
              </div>
              <div class="w-full flex-1">
                <div
                  class="my-2 p-1 bg-white flex border border-gray-200 rounded"
                >
                  <input
                    placeholder="Address"
                    class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                  />
                </div>
              </div>
              <div class="w-full flex-1">
                <div
                  class="my-2 p-1 bg-white flex border border-gray-200 rounded"
                >
                  <input
                    placeholder="Phone"
                    class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                  />
                </div>
              </div>
              <div class="w-full flex-1">
                <div
                  class="my-2 p-1 bg-white flex border border-gray-200 rounded"
                >
                  <input
                    placeholder="Address"
                    class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                  />
                </div>
              </div>
              <div class="w-full flex-1">
                <p>Do we need additional instructions to find this address?</p>
                <div
                  class="my-2 p-1 bg-white flex border border-gray-200 rounded"
                >
                  <textarea
                    placeholder="Provide details such as building description, a nearby landmark, or other navigation instructions "
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    class="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row">
          <div class="w-64 mx-2 font-bold h-6 mt-3 text-gray-800"></div>
          <div class="flex-1 flex flex-col md:flex-row">
            <button
              class="text-sm  mx-2 w-32  focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer
        hover:bg-blue-700 hover:text-blue-100
        bg-blue-100
        text-blue-700
        border duration-200 ease-in-out
        border-blue-600 transition"
            >
              Add/Change
            </button>
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
