<template>
<main>
<div class="w-full flex overflow-hidden antialiased text-gray-800 bg-white h-screen">
  <!-- section body side nav -->


  <div class="">
    <!-- section body top nav -->
    <nav aria-label="top bar" class="flex-none flex justify-between navt bg-blue-600 items-center w-full">
      <!-- top bar left -->
      <ul aria-label="top bar left" aria-orientation="horizontal" class="flex items-center justify-between">
        <!-- add button -->
        <li class="group m-2">
    <div class="h-20 flex items-center w-full rounded-full ml-4">
      <nuxt-link to="/home" class="m-auto">
           <img src="/icon.png" alt="" class="w-12 h-12 m-auto rounded-full">
      </nuxt-link>
    </div>

        </li>
        <nuxt-link to="" class="group ml-8 hidden md:block">
          <span class="font-bold text-white text-4xl">
            BINGO
          </span>
        </nuxt-link>
      </ul>

      <!-- to bar right  -->
      <ul aria-label="top bar right" aria-orientation="horizontal" class="px-8 flex items-center justify-between">
        <li class="relative m-4">
          <input title="Search Bar" aria-label="search bar" role="search" class="pr-8 pl-4 py-2 rounded-md cursor-pointer transition-all duration-300 ease-in-out focus:border-blue-600 focus:cursor-text w-4 focus:w-64 placeholder-transparent focus:placeholder-blue-500" type="text" placeholder="Search" />
          <i class="pointer-events-none absolute top-0 right-0 h-full flex items-center pr-3">
            <svg class="fill-current w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
            </svg>
          </i>
        </li>
        <li class="m-2 hidden md:block">
  <nuxt-link to="">
      <Avatardd/>
  </nuxt-link>

</li>
<li class="text-white m-2 hidden md:block">
  <nuxt-link to="">
<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 26 26"><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-transform:none;block-progression:tb" d="M 13 0 C 5.826231 0 1.6e-005 5.8262 0 13 C -4.2e-005 20.1738 5.826191 26 13 26 C 20.173809 26 26.000041 20.1738 26 13 C 25.999984 5.8262 20.173769 0 13 0 z M 13 1 C 19.633359 1 24.999985 6.3666 25 13 C 25.000038 19.6334 19.633396 25 13 25 C 6.366603 25 0.999962 19.6334 1 13 C 1.000015 6.3666 6.366641 1 13 1 z M 7 7 L 7 8 L 8.5039062 8 L 10.867188 15.246094 L 9.9765625 18.367188 C 9.8924425 18.663257 10.149243 19.003576 10.457031 19.003906 L 18.457031 19.003906 L 18.457031 18.003906 L 11.119141 18.003906 L 11.6875 16.009766 L 17.830078 16 L 19.947266 10.158203 L 19.007812 9.8164062 L 18.574219 11.015625 L 10.539062 11.015625 L 9.2285156 7 L 7 7 z " font-family="sans-serif" font-weight="400" overflow="visible"/></svg>
  </nuxt-link>
</li>

<li class="" >
       <div class="relative block md:hidden">
         <button @click="open = !open" class="flex items-center px-3 py-2 border rounded text-white focus:outline-none border-white">
		      <svg class="fill-current h-6 w-5 -mt-1 text-white" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
		    </button>

      </div>
      <div @mouseleave="open=false" v-show="open" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="absolute right-0 w-56 mt-2 origin-top-right rounded-md shadow-lg md:w-48">
          <div class="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
           <a href="#" class="flex justify-between items-center w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-blue-400 rounded-md focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
                <span>Cart</span>
               <svg fill="#808080" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 26 26"><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-transform:none;block-progression:tb" d="M 13 0 C 5.826231 0 1.6e-005 5.8262 0 13 C -4.2e-005 20.1738 5.826191 26 13 26 C 20.173809 26 26.000041 20.1738 26 13 C 25.999984 5.8262 20.173769 0 13 0 z M 13 1 C 19.633359 1 24.999985 6.3666 25 13 C 25.000038 19.6334 19.633396 25 13 25 C 6.366603 25 0.999962 19.6334 1 13 C 1.000015 6.3666 6.366641 1 13 1 z M 7 7 L 7 8 L 8.5039062 8 L 10.867188 15.246094 L 9.9765625 18.367188 C 9.8924425 18.663257 10.149243 19.003576 10.457031 19.003906 L 18.457031 19.003906 L 18.457031 18.003906 L 11.119141 18.003906 L 11.6875 16.009766 L 17.830078 16 L 19.947266 10.158203 L 19.007812 9.8164062 L 18.574219 11.015625 L 10.539062 11.015625 L 9.2285156 7 L 7 7 z "  font-family="sans-serif" font-weight="400" overflow="visible"/></svg>

            </a>
              <a href="#" class="flex justify-between items-center w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-blue-400 rounded-md focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
                <span>Wishlist</span>
                <svg fill="#808080"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 30 30" xml:space="preserve"><g><path d="M22.5 13h-2.717L16.93 8.243a.499.499 0 1 0-.858.514L18.617 13h-7.234l2.546-4.243a.5.5 0 1 0-.858-.514L10.217 13H7.5a.5.5 0 1 0 0 1h.623l1.689 5.912c.183.64.776 1.088 1.442 1.088h7.492c.666 0 1.259-.447 1.442-1.088L21.878 14h.622a.5.5 0 1 0 0-1zm-3.274 6.638a.501.501 0 0 1-.48.362h-7.492a.501.501 0 0 1-.48-.362L9.163 14h11.674l-1.61 5.638z"/><path d="M15 0C6.729 0 0 6.729 0 15s6.729 15 15 15 15-6.729 15-15S23.271 0 15 0zm0 29C7.28 29 1 22.72 1 15S7.28 1 15 1s14 6.28 14 14-6.28 14-14 14z"/></g><metadata><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:dc="http://purl.org/dc/elements/1.1/"><rdf:Description about="https://iconscout.com/legal#licenses" dc:title="shop,button,online,payment,cart,e-commerce,money,back,comfortable" dc:description="shop,button,online,payment,cart,e-commerce,money,back,comfortable" dc:publisher="Iconscout" dc:date="2017-11-27" dc:format="image/svg+xml" dc:language="en"><dc:creator><rdf:Bag><rdf:li>Those Icons</rdf:li></rdf:Bag></dc:creator></rdf:Description></rdf:RDF></metadata></svg>

            </a>
            <a href="#" class="flex justify-between items-center w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-blue-400 rounded-md focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
                <span>Settings</span>
                <svg fill="#808080" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 31 30" version="1.1"><title>Settings 4</title><g id="Page-1" stroke="none" stroke-width="1"  fill-rule="evenodd"><g id="Icons" transform="translate(-190.000000, -128.000000)"><path d="M205.498 157.986a3.225 3.225 0 0 1-2.295-.951 3.198 3.198 0 0 1-.945-2.191 12.2 12.2 0 0 1-2.844-1.18c-1.232 1.162-3.312 1.141-4.52-.064a3.242 3.242 0 0 1-.949-2.293c0-.834.312-1.623.883-2.227a12.282 12.282 0 0 1-1.182-2.844 3.243 3.243 0 0 1-3.146-3.24 3.246 3.246 0 0 1 3.146-3.24c.271-.992.666-1.943 1.18-2.844a3.246 3.246 0 0 1 .064-4.52c1.199-1.205 3.287-1.227 4.52-.066a12.219 12.219 0 0 1 2.842-1.178 3.246 3.246 0 0 1 3.24-3.148 3.246 3.246 0 0 1 3.242 3.148c.994.271 1.945.666 2.84 1.178 1.236-1.166 3.316-1.143 4.523.064a3.244 3.244 0 0 1 .061 4.52c.514.898.908 1.85 1.182 2.842a3.245 3.245 0 0 1 3.15 3.24c0 .863-.336 1.678-.949 2.289a3.204 3.204 0 0 1-2.201.949c-.27.992-.664 1.943-1.178 2.842a3.249 3.249 0 0 1-.062 4.521c-1.201 1.203-3.295 1.227-4.518.064-.9.514-1.852.91-2.842 1.18a3.248 3.248 0 0 1-3.242 3.149zm-6.221-5.57c.098 0 .197.027.285.082a11.052 11.052 0 0 0 3.414 1.416c.27.062.449.318.414.59-.002.027-.039.188-.045.215a2.086 2.086 0 0 0 .619 1.555c.408.412.953.637 1.533.637a2.171 2.171 0 0 0 2.168-2.164 1.317 1.317 0 0 1-.059-.248.534.534 0 0 1 .414-.586 11.121 11.121 0 0 0 3.412-1.42.54.54 0 0 1 .711.123c.047.061.084.125.117.188.844.881 2.258.852 3.076.031a2.173 2.173 0 0 0 0-3.066 1.441 1.441 0 0 1-.217-.133.538.538 0 0 1-.125-.709 11.039 11.039 0 0 0 1.414-3.414.54.54 0 0 1 .59-.414c.072.01.145.025.215.047.672-.02 1.156-.213 1.566-.623.408-.408.633-.951.633-1.529a2.171 2.171 0 0 0-2.17-2.166 3.549 3.549 0 0 1-.242.059.525.525 0 0 1-.59-.412 11.23 11.23 0 0 0-1.42-3.418.54.54 0 0 1 .123-.709c.062-.047.127-.084.191-.121a2.153 2.153 0 0 0 .029-3.074c-.82-.824-2.246-.818-3.064.002a1.39 1.39 0 0 1-.137.221.542.542 0 0 1-.707.121 11.168 11.168 0 0 0-3.412-1.42.531.531 0 0 1-.414-.586c.008-.076.027-.146.045-.219a2.153 2.153 0 0 0-2.148-2.193 2.171 2.171 0 0 0-2.172 2.166c.031.1.051.17.059.246a.536.536 0 0 1-.414.586 11.168 11.168 0 0 0-3.412 1.42.537.537 0 0 1-.707-.121 1.212 1.212 0 0 1-.121-.189c-.846-.877-2.264-.846-3.078-.031a2.167 2.167 0 0 0 0 3.064c.096.051.158.088.219.137a.54.54 0 0 1 .121.707 11.063 11.063 0 0 0-1.416 3.414c-.062.27-.297.439-.592.414a2.523 2.523 0 0 1-.213-.047c-1.178.018-2.195.961-2.195 2.154s.973 2.168 2.168 2.168c.029-.01.213-.057.24-.061.295-.02.527.146.59.412a11.181 11.181 0 0 0 1.42 3.418.54.54 0 0 1-.119.705 1.561 1.561 0 0 1-.191.125 2.102 2.102 0 0 0-.662 1.543c0 .578.227 1.121.635 1.531.82.822 2.246.818 3.062 0 .051-.094.088-.158.133-.217a.537.537 0 0 1 .426-.207zm6.215-14.283a4.867 4.867 0 0 0-4.859 4.861 4.868 4.868 0 0 0 4.859 4.861 4.868 4.868 0 0 0 4.861-4.861 4.868 4.868 0 0 0-4.861-4.861zm0 10.799a5.943 5.943 0 0 1-5.936-5.938 5.944 5.944 0 0 1 5.936-5.938 5.944 5.944 0 0 1 5.938 5.938 5.942 5.942 0 0 1-5.938 5.938z" id="Settings-4"/></g></g><metadata><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:dc="http://purl.org/dc/elements/1.1/"><rdf:Description about="https://iconscout.com/legal#licenses" dc:title="settings" dc:description="settings" dc:publisher="Iconscout" dc:date="2017-09-14" dc:format="image/svg+xml" dc:language="en"><dc:creator><rdf:Bag><rdf:li>Mirko Monti</rdf:li></rdf:Bag></dc:creator></rdf:Description></rdf:RDF></metadata></svg>
                </a>
            <a href="#" class="flex justify-between items-center w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-red-400 rounded-md focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
                <span>
                    Logout
                </span>
                <svg fill="#808080" width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g data-name="Logout"><path d="M46.685,51.273H17.315a8.51,8.51,0,0,1-8.5-8.5V21.227a8.51,8.51,0,0,1,8.5-8.5H32.65a1.5,1.5,0,0,1,0,3H17.315a5.506,5.506,0,0,0-5.5,5.5V42.773a5.506,5.506,0,0,0,5.5,5.5h29.37a5.506,5.506,0,0,0,5.5-5.5V31.16a1.5,1.5,0,1,1,3,0V42.773A8.51,8.51,0,0,1,46.685,51.273Z"/><path d="M29.877 40.505H21.22a1.5 1.5 0 0 1 0-3h8.657A14.893 14.893 0 0 0 44.754 22.628v-8.4a1.5 1.5 0 1 1 3 0v8.4A17.9 17.9 0 0 1 29.877 40.505zM53.685 23.157a1.5 1.5 0 0 1-1.061-.439l-2.641-2.641A1.5 1.5 0 1 1 52.1 17.956L54.745 20.6a1.5 1.5 0 0 1-1.06 2.56z"/><path d="M38.824,23.157a1.5,1.5,0,0,1-1.06-2.56l7.43-7.43a1.5,1.5,0,1,1,2.121,2.121l-7.43,7.43A1.5,1.5,0,0,1,38.824,23.157Z"/></g></svg>
            </a>
          </div>
        </div>
</li>
      </ul>
    </nav>

    <div class="flex btm">


        <nav aria-label="side bar" aria-orientation="vertical" class="flex-none flex flex-col items-center text-center text-gray-400 border-r w-16 bg-gray-400 btm">

    <ul>

    </ul>
  </nav>


    <!-- main content -->
    <main class="btm overflow-y-scroll default w-full">
          <nuxt/>
     <div class="h-24 text-center pt-4 border-t-2">
BINGO.com
          </div>
    </main>
    </div>


  </div>
</div>

</main>

</template>

<script>
import Avatardd from "~/components/Avatardd";
export default {
  components:{
    Avatardd
  },  data() {
        return {
            open:false
        }
    },

}
</script>
<style scoped>
  .navt{
    height:9vh;
  }
  .btm{
    height:91vh;
  }
  .m{
    height:100vh;
  }
      /* can be configured in tailwind.config.js */
      .group:hover .group-hover\:block {
        display: block;
      }

      .focus\:cursor-text:focus {
        cursor: text;
      }

      .focus\:w-64:focus {
        width: 16rem;
      }

      /* zendesk styles */
      .h-16 {
        height: 50px;
      }
      .bg-teal-900 {
        background: #03363d;
      }
      .bg-gray-100 {
        background: #f8f9f9;

      }
      .hover\:border-green-500:hover {
        border-color: #78a300;
      }

.default{
    overflow-y: scroll;
}
/* The emerging W3C standard
   that is currently Firefox-only */
.default{
  scrollbar-width: thin;
  scrollbar-color:transparent transparent;
}

.default:hover{
scrollbar-color:rgb(0, 58, 247) transparent;
}
/* Works on Chrome/Edge/Safari*/
.default::-webkit-scrollbar {
  width: 4px;
}
.default::-webkit-scrollbar-track {
  background:transparent;
}
.default::-webkit-scrollbar-thumb {
  background-color: rgb(248, 249, 252);
  border-radius: 20px;
  border: 3px solid transparent;
  height: 4px;
}
.default:hover::-webkit-scrollbar-thumb {
    background-color: rgb(7, 62, 245);
}
</style>