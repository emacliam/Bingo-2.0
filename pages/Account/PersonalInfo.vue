<template>
  <main class="max-w-4xl m-auto">
    <div class="flex text-xs mb-4">
      <a
        class="text-blue-700 m-1 border-b border-transparent hover:border-orange-600"
        href="/Account"
        >My Account</a
      >
      <span class="text-gray-500 m-1">/</span>
      <span class="text-gray-500 m-1">Personal Info & Address Book</span>
    </div>
    <div class="max-w-4xl">
      <span class="border-b-2 border-orange-600"
        >Personal Info & Address Book</span
      >
      <div class="max-w-4xl">
        <hr />
      </div>
    </div>
    <div>
      <div
        class="max-w-4xl bg-blue-700 h-16 mt-8 flex justify-center items-center"
      >
        <span
          @click="Onprofile()"
          :class="profile ? 'border-b-2 border-orange-600' : ''"
          class="m-2 text-white cursor-pointer "
          >Profile</span
        >
        <span
          @click="Onaddress()"
          :class="address ? 'border-b-2 border-orange-600' : ''"
          class="m-2 text-white cursor-pointer"
          >Addresses</span
        >
      </div>
    </div>
    <div>
      <div v-if="profile"><Profile /></div>
      <div v-if="address"><Address /></div>
    </div>
  </main>
</template>

<script>
import Profile from "~/components/Account/Profile";
import Address from "~/components/Account/Address";
export default {
  data() {
    return {
      profile: true,
      address: false
    };
  },
  components: {
    Profile,
    Address
  },
  methods: {
    Onprofile() {
      this.address = false;
      this.profile = true;
    },
    Onaddress() {
      this.address = true;
      this.profile = false;
    }
  }
};
</script>

<style></style>
