<template>
  <main class="flex flex-col h-screen">
    <nav
      class="flex w-full items-center justify-between px-6 h-16 bg-blue-600 text-gray-700 z-10"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <button class="mr-2 text-white" aria-label="Open Menu" @click="drawer()">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-8 h-8"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <img src alt="Logo" class="h-auto w-24" />
        </div>
      </div>
      <div class="flex items-center text-white">
        <nuxt-link to="/signin" class="m-2 hover:bg-blue-300 p-1 rounded-lg">Sign In</nuxt-link>
        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 26 26"><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-transform:none;block-progression:tb" d="M 13 0 C 5.826231 0 1.6e-005 5.8262 0 13 C -4.2e-005 20.1738 5.826191 26 13 26 C 20.173809 26 26.000041 20.1738 26 13 C 25.999984 5.8262 20.173769 0 13 0 z M 13 1 C 19.633359 1 24.999985 6.3666 25 13 C 25.000038 19.6334 19.633396 25 13 25 C 6.366603 25 0.999962 19.6334 1 13 C 1.000015 6.3666 6.366641 1 13 1 z M 7 7 L 7 8 L 8.5039062 8 L 10.867188 15.246094 L 9.9765625 18.367188 C 9.8924425 18.663257 10.149243 19.003576 10.457031 19.003906 L 18.457031 19.003906 L 18.457031 18.003906 L 11.119141 18.003906 L 11.6875 16.009766 L 17.830078 16 L 19.947266 10.158203 L 19.007812 9.8164062 L 18.574219 11.015625 L 10.539062 11.015625 L 9.2285156 7 L 7 7 z "  font-family="sans-serif" font-weight="400" overflow="visible"/></svg>
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
          v-show="isOpen"
          class="z-10 fixed inset-0 transition-opacity"
        >
          <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
        </div>
      </transition>
      <aside
        class="transform top-0 left-0 w-48 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <span @click="isOpen = false" class="flex w-full items-center p-4 border-b">
          <span class="text-xl font-bold">BINGO</span>
        </span>
        <span @click="home()"
          class="flex items-center p-4 hover:bg-indigo-500 hover:text-white border-b cursor-pointer"
        >
          <span class="mr-2">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </span>
          <span>Home</span>
        </span>
      </aside>
    </nav>
    <div class="flex-1 overflow-y-scroll overflow-x-hidden btm">
      <nuxt />
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
    home(){
      this.$router.push('/')
      this.isOpen = false;

    }
  },

  mounted() {
    this.isOpen === false;
  },
};
</script>
<style scoped>
nav{
  height: 15%;
}
.btm{
  height: 85%;
}

</style>
