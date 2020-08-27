<template>
  <main class="max-w-4xl m-auto">
<div class="max-w-4xl">
    <span class="border-b-2 border-orange-600">Settings</span>
    <div class="max-w-4xl">
           <hr>
    </div>
</div>
<div>
    <div class="max-w-4xl bg-blue-700 h-16 mt-8 flex justify-center items-center">
    </div>
</div>
<div class="flex">
    <div class="w-1/4 flex flex-col items-center pt-12 h-64 bg-gray-300">
        <span @click="Onlanguage()" :class="language ? 'border-b-2 border-orange-500':''">Language</span>
    </div>
    <div>
    <div v-if = "language">
        <Language/>
    </div>
    </div>

</div>
  </main>
</template>
<script>
import Language from "~/components/Account/Settings/Language";
import Address from "~/components/Account/Address";
export default {
    data() {
        return {
            language:true,
            address:false

        }
    },
    components:{
        Language,
        Address
    },
    methods: {
        Onlanguage(){
            this.address = false
            this.language = true
        },
        Onaddress(){
            this.address = true
            this.language = false
        }
    },

}
</script>