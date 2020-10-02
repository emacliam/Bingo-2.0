<template>
  <main class="flex flex-col bg-gray-200">
    <div class="nav bg-blue-700 max-w-full mb-3">
      <div
        class="flex flex-col px-4 md:items-center md:justify-between md:flex-row md:px-6 lg:px-8  h-16 max-w-full"
      >
        <div class="flex items-center text-white">
          <button
            class="mr-2 border border-blue-700 rounded hover:border-white"
            aria-label="Open Menu"
            @click="drawer()"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-8 h-8"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <transition
          enter-class="opacity-0"
          enter-active-class="ease-out transition-medium"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-active-class="ease-out transition-medium"
          leave-to-class="opacity-0"
        >
          <div
            @keydown.esc="isOpen = false"
            v-show="isOpen"
            class="z-10 fixed inset-0 transition-opacity"
          >
            <div
              @click="isOpen = false"
              class="absolute inset-0 bg-black opacity-50"
              tabindex="0"
            >
              <div
                class=" ml-64 mt-2 w-6 h-6 rounded-full text-center text-white cursor-pointer z-50
                "
                @click="isOpen = false"
              >
                <svg
                  class="fill-current stroke-current  h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 22 22"
                  version="1.1"
                >
                  <title>cancel</title>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <g
                      id="Artboard"
                      transform="translate(-1447.000000, -2191.000000)"
                      stroke="#000"
                      stroke-width="2"
                    >
                      <g
                        id="x-circle"
                        transform="translate(1448.000000, 2192.000000)"
                      >
                        <circle id="Oval" cx="10" cy="10" r="10" />
                        <path d="M13 7l-6 6" id="Shape" />
                        <path d="M7 7l6 6" id="Shape" />
                      </g>
                    </g>
                  </g>
                  <metadata>
                    <rdf:RDF
                      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                      xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
                      xmlns:dc="http://purl.org/dc/elements/1.1/"
                      ><rdf:Description
                        about="https://iconscout.com/legal#licenses"
                        dc:title="x,circle"
                        dc:description="x,circle"
                        dc:publisher="Iconscout"
                        dc:date="2017-09-15"
                        dc:format="image/svg+xml"
                        dc:language="en"
                        ><dc:creator
                          ><rdf:Bag
                            ><rdf:li>Feather Icons</rdf:li></rdf:Bag
                          ></dc:creator
                        ></rdf:Description
                      ></rdf:RDF
                    >
                  </metadata>
                </svg>
              </div>
            </div>
          </div>
        </transition>
        <aside
          class="transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
          :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
        >
          <div class="p-2 bg-blue-800 text-white text-center text-md font-bold">
            Categories
          </div>
          <Categories />
        </aside>

        <div class="flex flex-row items-center justify-between">
          <a href="/" class="text-white text-xl font-bold">BINGO</a>
          <button
            class="md:hidden rounded-lg focus:outline-none text-white"
            @click="open = !open"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
              <path
                v-show="!open"
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
              <path
                v-show="open"
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <!--    search bar -->
        <div
          class=" flex justify-between items-center relative md:ml-12 md:w-auto w-auto mx-auto mt-2 mb-2 rounded-lg bg-white"
        >
          <div>
            <select
              name=""
              id=""
              class="rounded-l-lg select-css h-full w-auto py-2"
            >
              <option value="All">All departments</option>
              <option value="">Electronics</option>
              <option value="">Furniture</option>
              <option value="">Vehicles</option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <input
            title="Search Bar"
            aria-label="search bar"
            role="search"
            class="pr-8 pl-4 py-2 cursor-pointer focus:border-blue-600 focus:cursor-text w-full placeholder-transparent focus:placeholder-blue-500"
            type="text"
            placeholder="Search"
          />
          <div class="cursor-pointer h-full rounded-r-lg w-16  py-2 pr-3">
            <svg
              class="fill-current w-5 h-5 mx-auto text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"
              />
            </svg>
          </div>
        </div>

        <div
          :class="{ 'flex-col': open, hidden: !open }"
          class="flex md:hidden relative bg-white z-50 rounded-b-lg"
        >
          <a class="px-4 py-2 mt-2 text-sm font-semibold m-auto" href="#"
            >Cart</a
          >
          <div class="mx-24">
            <hr />
          </div>
          <a class="px-4 py-2 mt-2 text-sm font-semibold m-auto" href="#"
            >Wishlist</a
          >
          <div class="mx-24">
            <hr />
          </div>
          <a class="px-4 py-2 mt-2 text-sm font-semibold m-auto" href="#"
            >Account</a
          >
          <div class="mx-24">
            <hr />
          </div>
          <a class="px-4 py-2 mt-2 text-sm font-semibold m-auto" href="#"
            >Settings</a
          >
          <div class="mx-24">
            <hr />
          </div>
          <a
            class="px-4 py-2 mt-2 text-sm font-semibold m-auto bg-blue-700 rounded-lg mb-2 text-white"
            href="#"
            >Sign In</a
          >
        </div>

        <nav
          class="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row hidden md:items-center"
        >
          <div
            class="mr-24 flex flex-col text-sm text-white font-bold opacity-75"
          >
            <span>Sell On Bingo</span>
            <nuxt-link to="/Business" class="underline hover:text-blue-800">
              Create a business Profile
            </nuxt-link>
          </div>
          <nuxt-link
            to="/Login"
            class="border-r border-gray-500 px-2 text-sm text-gray-100 opacity-75 hover:opacity-100 hover:text-white duration-300 transform ease-in"
            >Login</nuxt-link
          >
          <nuxt-link
            to="/Register"
            class="border-r border-gray-500 px-2 text-sm text-gray-100 opacity-75 hover:opacity-100 hover:text-white duration-300 transform ease-in"
            >Register</nuxt-link
          >

          <!--   account dropdown -->
          <div class="relative m-2">
            <button
              @click="drop = !drop"
              class=" flex items-center text-white focus:outline-none"
            >
              <span
                class="border-gray-500 opacity-75 text-sm hover:opacity-100 text-gray-100 hover:text-white duration-300 transform ease-in"
                >My Account</span
              >
              <svg
                :class="{ 'rotate-180': drop, 'rotate-0': !drop }"
                class="inline stroke-current fill-current text-white w-5 h-5 mt-1 pt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17,8H7a1,1,0,0,0-.768,1.641l5,6a1,1,0,0,0,1.536,0l5-6A1,1,0,0,0,17,8Zm-5,5.438L9.135,10h5.73Z"
                />
              </svg>
            </button>
            <div
              v-show="drop"
              x-transition:enter="transition ease-out duration-100"
              x-transition:enter-start="transform opacity-0 scale-95"
              x-transition:enter-end="transform opacity-100 scale-100"
              x-transition:leave="transition ease-in duration-75"
              x-transition:leave-start="transform opacity-100 scale-100"
              x-transition:leave-end="transform opacity-0 scale-95"
              class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
            >
              <div
                class="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800"
              >
                <a
                  class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/Account"
                  >Account</a
                >
                <a
                  class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/Account/Orders"
                  >My Orders</a
                >
              </div>
            </div>
          </div>
          <div class="relative my-32">
            <button
              @click="dropdownOpen = !dropdownOpen"
              class="relative z-10 block p-2 focus:outline-none"
            >
              <svg
                class="h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                />
              </svg>
            </button>

            <div
              v-show="dropdownOpen"
              @click="dropdownOpen = false"
              class="fixed inset-0 h-full w-full z-10"
            ></div>

            <div
              v-show="dropdownOpen"
              class="absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20"
              style="width:10rem;"
            >
              <div class="py-2">
                <a
                  href="#"
                  class="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-1"
                >
                  <p class="text-gray-600 text-sm mx-2">
                    <span class="font-bold" href="#">Sara Salah</span>
                    replied on the
                    <span class="font-bold text-blue-500" href="#"
                      >Upload Image</span
                    >
                    artical . 2m
                  </p>
                </a>
              </div>
              <a
                href="#"
                class="block bg-blue-700 text-white text-center font-bold py-2"
                >See all notifications</a
              >
            </div>
          </div>
          <div class="flex justify-center md:block">
            <a class="relative text-white" href="/Account/Cart">
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div
                class="absolute top-0 left-0 rounded-full w-5 h-5  bg-red-500 text-white"
              >
                <span class="text-xs flex justify-center items-center">4</span>
              </div>
            </a>
          </div>
          <div class="flex justify-center md:block p-2">
            <a class="relative text-white" href="/Account/wishlist">
              <svg
                class="h-5 w-5 fill-current stroke-current"
                viewBox="0 0 28 28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 13 0 A 12.999989 12.999989 0 0 0 0 13 A 12.999989 12.999989 0 0 0 13 26 A 12.999989 12.999989 0 0 0 26 13 A 12.999989 12.999989 0 0 0 13 0 z M 9.9960938 8.0058594 C 11.012513 8.0598594 12.035401 8.5031406 12.837891 9.3066406 L 13 9.46875 L 13.162109 9.3066406 C 14.76725 7.6997406 17.285787 7.5400688 18.787109 9.0429688 C 20.2885 10.545969 20.132778 13.070334 18.527344 14.677734 L 18.013672 15.191406 L 13.353516 19.857422 C 13.158477 20.051322 12.843476 20.051322 12.648438 19.857422 L 7.9863281 15.191406 L 7.4726562 14.677734 C 5.867295 13.070334 5.7095431 10.545969 7.2109375 9.0429688 C 7.9614454 8.2916688 8.9802089 7.9528594 9.9960938 8.0058594 z "
                />
              </svg>

              <div
                class="absolute top-0 left-0 rounded-full w-5 h-5  bg-red-500 text-white"
              >
                <span class="text-xs flex justify-center items-center">4</span>
              </div>
            </a>
          </div>
        </nav>
      </div>
    </div>
    <div class="flex container max-w-full mt-16">
      <div
        class="fixed w-16 bg-white box-border rounded-tr-md rounded-br-md sidebar hidden md:block"
      >
        <ul>
          <div class="hover:bg-gray-100 rounded-tr-lg sidesvg">
            <a
              href="/"
              class="h-16 px-6 flex  justify-center items-center w-full
					focus:text-orange-500"
            >
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path
                  d="M6,30H26a1,1,0,0,0,1-1V21h2a1,1,0,0,0,.9-.56,1,1,0,0,0-.11-1.05l-13-17a1,1,0,0,0-1.58,0l-13,17a1,1,0,0,0-.11,1.05A1,1,0,0,0,3,21H5v8A1,1,0,0,0,6,30Zm12-2H14V23a2,2,0,0,1,4,0ZM16,4.65,27,19H26a1,1,0,0,0-1,1v8H20V23a4,4,0,0,0-8,0v5H7V20a1,1,0,0,0-1-1H5Z"
                  data-name="Layer 51"
                />
              </svg>
            </a>
          </div>

          <div
            class="hover:bg-gray-100 sidesvg"
            :class="
              $nuxt.$route.name == 'Categories'
                ? 'border-l-4 border-blue-700'
                : ''
            "
          >
            <nuxt-link
              to="/Categories"
              class="h-16 px-6 flex  justify-center items-center w-full
					focus:text-orange-500"
            >
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="nonzero"
                  d="M16.9651972,10.7910943 C18.6355551,10.7962613 19.9898225,12.1745282 20,13.8796779 L20,13.8796779 L20,16.9019422 C19.9898672,18.6086493 18.6370574,19.989656 16.9651972,20 L16.9651972,20 L14.0046404,20 C12.3343058,19.9896104 10.9841799,18.6071157 10.9791183,16.9019422 L10.9791183,16.9019422 L10.9791183,13.8796779 C10.9791183,12.1739003 12.3336907,10.7910943 14.0046404,10.7910943 L14.0046404,10.7910943 Z M4.25058005,10.7911094 C4.56143174,10.7571369 4.86400582,10.9072962 5.02984404,11.1778368 C5.19568227,11.4483775 5.19568227,11.7918234 5.02984404,12.0623641 C4.86400582,12.3329047 4.56143174,12.483064 4.25058005,12.4490914 L4.25058005,12.4490914 L3.03480278,12.4490914 C2.25931969,12.4490743 1.62923179,13.0880635 1.62412993,13.879693 L1.62412993,13.879693 L1.62412993,16.8640606 C1.64384865,17.6493393 2.26544423,18.2797163 3.03480278,18.2946623 L3.03480278,18.2946623 L6.01392111,18.2946623 C6.38719882,18.2971859 6.74603726,18.147577 7.01085993,17.8790132 C7.27568261,17.6104493 7.42460215,17.245127 7.42459397,16.8640606 L7.42459397,16.8640606 L7.42459397,12.3827722 L7.4119274,12.2712944 C7.39792632,11.9748017 7.54013038,11.6892532 7.790386,11.527269 C8.07192357,11.3450368 8.43369689,11.3557726 8.70438922,11.5543927 C8.97508155,11.7530127 9.10035302,12.0996451 9.02088167,12.4301431 L9.02088167,12.4301431 L9.02088167,16.8924832 C9.02088167,18.6034933 7.66215418,19.990541 5.98607889,19.990541 L5.98607889,19.990541 L3.03480278,19.990541 C1.37321638,19.9553489 0.0344735814,18.5887024 -1.15463195e-14,16.8924832 L-1.15463195e-14,16.8924832 L-1.15463195e-14,13.879693 C-1.15463195e-14,13.0589056 0.320029324,12.2718731 0.889433607,11.6923782 C1.45883789,11.1128833 2.23077765,10.7885917 3.03480278,10.7911094 L3.03480278,10.7911094 Z M16.9651972,12.4490763 L14.0046404,12.4490763 C13.2306729,12.4490763 12.6032171,13.0895784 12.6032171,13.8796779 L12.6032171,13.8796779 L12.6032171,16.9019422 C12.600757,17.2821353 12.7476031,17.6474939 13.0109571,17.916337 C13.2743111,18.1851801 13.6322099,18.335087 14.0046404,18.3325757 L14.0046404,18.3325757 L16.9651972,18.3325757 C17.3376276,18.335087 17.6955265,18.1851801 17.9588805,17.916337 C18.2222345,17.6474939 18.3690806,17.2821353 18.3666205,16.9019422 L18.3666205,16.9019422 L18.3666205,13.8796779 C18.3666205,13.5002587 18.2189431,13.1363796 17.9561311,12.8680898 C17.6933191,12.5997999 17.3368695,12.4490763 16.9651972,12.4490763 L16.9651972,12.4490763 Z M16.9651972,1.42108547e-14 C18.6231586,0.0401888697 19.9564291,1.40542407 19.9907193,3.09805779 L19.9907193,3.09805779 L19.9907193,6.11084794 C20.0006255,6.93000939 19.6913283,7.71963098 19.1308818,8.30597331 C18.5704353,8.89231564 17.8047578,9.22733887 17.0023202,9.23732828 L17.0023202,9.23732828 L15.7772622,9.23732828 C15.3622318,9.19197022 15.0474942,8.83443927 15.0474942,8.40833728 C15.0474942,7.98223529 15.3622318,7.62470434 15.7772622,7.57934628 L15.7772622,7.57934628 L16.9651972,7.57934628 C17.3409577,7.57685591 17.7002159,7.42142485 17.963298,7.14752348 C18.2263802,6.87362212 18.3715416,6.50388945 18.3665893,6.12032212 L18.3665893,6.12032212 L18.3665893,3.09805779 C18.3565908,2.31222501 17.7349852,1.67766309 16.9651972,1.66745618 L16.9651972,1.66745618 L14.0046404,1.66745618 C13.2306729,1.66745618 12.6032483,2.30795834 12.6032483,3.09805779 L12.6032483,3.09805779 L12.6032483,7.61724301 L12.5935698,7.72116039 C12.5305946,8.1290042 12.1825523,8.43701778 11.7679814,8.43202274 C11.5521645,8.42708972 11.3472696,8.33413973 11.1990474,8.1739275 C11.0508253,8.01371527 10.9716204,7.79958378 10.9791183,7.57934628 L10.9791183,7.57934628 L10.9791183,3.09805779 C10.976652,2.2772742 11.2943223,1.48924474 11.8619853,0.907972252 C12.4296483,0.32669976 13.2006115,1.42108547e-14 14.0046404,1.42108547e-14 L14.0046404,1.42108547e-14 Z M5.99535968,9.32587341e-14 C7.66931968,0.00520201691 9.02506666,1.3892071 9.03016246,3.09805779 L9.03016246,3.09805779 L9.03016246,6.12032212 C9.03016246,6.94110958 8.71013314,7.7281421 8.14072886,8.307637 C7.57132457,8.8871319 6.79938482,9.21142348 5.99535968,9.20892028 L5.99535968,9.20892028 L3.03480284,9.20892028 C1.36444497,9.20373866 0.0101775379,7.82547177 5.10440676e-08,6.12032212 L5.10440676e-08,6.12032212 L5.10440676e-08,3.09805779 C0.0101328156,1.39135069 1.36294265,0.0103439638 3.03480284,9.32587341e-14 L3.03480284,9.32587341e-14 Z M5.99535968,1.66745618 L3.03480284,1.66745618 C2.6583302,1.65981918 2.29468591,1.80716464 2.02582107,2.07628669 C1.75695622,2.34540874 1.60549417,2.7136624 1.6055685,3.09805779 L1.6055685,3.09805779 L1.6055685,6.12032212 C1.59791363,6.50962241 1.74603381,6.88528857 2.0157445,7.1606209 C2.28545519,7.43595322 2.65345114,7.5871607 3.03480284,7.57934628 L3.03480284,7.57934628 L5.99535968,7.57934628 C6.37112019,7.57685591 6.73037836,7.42142485 6.99346051,7.14752348 C7.25654266,6.87362212 7.40170403,6.50388945 7.39675179,6.12032212 L7.39675179,6.12032212 L7.39675179,3.09805779 C7.39169024,2.31010852 6.76722089,1.67262323 5.99535968,1.66745618 L5.99535968,1.66745618 Z"
                  transform="translate(2 2)"
                />
              </svg>
            </nuxt-link>
          </div>
        </ul>
      </div>
      <div class="max-h-full md:ml-24 flex-1 max-w-full ml-0">
        <nuxt />
      </div>
    </div>
  </main>
</template>

<script>
import Categories from "~/components/Categories";
export default {
  components: {
    Categories
  },
  data() {
    return {
      open: false,
      drop: false,
      dropdownOpen: false,
      isOpen: false
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  }
};
</script>
/* note: dont scope the css */
<style>
.nav {
  height: 10vh;
}
.container {
  height: 88vh;
}

.sidebar {
  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25);
}
.sidesvg:hover {
  border-left: 3px blue solid;
}
.search {
  top: 20%;
}
/* class applies to select element itself, not a wrapper element */
.select-css {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  /* note: bg image below uses 2 urls. The first is an svg data uri for the arrow icon, and the second is the gradient.
        for the icon, if you want to change the color, be sure to use `%23` instead of `#`, since it's a url. You can also swap in a different svg icon or an external image reference

    */
  background-image: url(""),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
  background-position: right 0.7em top 50%, 0 0;
  /* icon size, then gradient */
  background-size: 0.65em auto, 100%;
}
/* Hide arrow icon in IE browsers */
.select-css::-ms-expand {
  display: none;
}
/* Hover style */
.select-css:hover {
  border-color: #888;
}
/* Focus style */
.select-css:focus {
  border-color: #aaa;
  /* It'd be nice to use -webkit-focus-ring-color here but it doesn't work on box-shadow */
  box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222;
  outline: none;
}

/* Set options to normal weight */
.select-css option {
  font-weight: normal;
}

/* Support for rtl text, explicit support for Arabic and Hebrew */
*[dir="rtl"] .select-css,
:root:lang(ar) .select-css,
:root:lang(iw) .select-css {
  background-position: left 0.7em top 50%, 0 0;
}

/* Disabled styles */
.select-css:disabled,
.select-css[aria-disabled="true"] {
  color: graytext;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22graytext%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
}

.select-css:disabled:hover,
.select-css[aria-disabled="true"] {
  border-color: #aaa;
}
</style>
