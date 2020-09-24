<template>
  <div class="w-full">
    <div class="shadow-md">
      <div class="tab w-full overflow-hidden border-t" v-for="i in 10" :key="i">
        <input
          class="absolute opacity-0"
          id="tab-single-one"
          type="radio"
          name="tabs2"
        />
        <label
          class="block p-2 leading-normal cursor-pointer"
          for="tab-single-one"
          >Electronics</label
        >
        <div
          class="tab-content overflow-hidden border-l-2 bg-gray-100  leading-normal"
        >
          <ul class="flex flex-col">
            <a class="p-2 hover:bg-blue-800" href="">Office Electronics</a>
            <a class="p-2 hover:bg-blue-800" href="">Home Electronics</a>
            <a class="p-2 hover:bg-blue-800" href="">Headphones</a>
            <a class="p-2 hover:bg-blue-800" href="">Computers</a>
            <a class="p-2 hover:bg-blue-800" href="">Phones</a>
            <a class="p-2 hover:bg-blue-800" href="">Camera</a>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var myRadios = document.getElementsByName("tabs2");
    var setCheck;
    var x = 0;
    for (x = 0; x < myRadios.length; x++) {
      myRadios[x].onclick = function() {
        if (setCheck != this) {
          setCheck = this;
        } else {
          this.checked = false;
          setCheck = null;
        }
      };
    }
  }
};
</script>

<style>
/* Tab content - closed */
.tab-content {
  max-height: 0;
  -webkit-transition: max-height 0.35s;
  -o-transition: max-height 0.35s;
  transition: max-height 0.35s;
}
/* :checked - resize to full height */
.tab input:checked ~ .tab-content {
  max-height: 100vh;
}
/* Label formatting when open */
.tab input:checked + label {
  /*@apply text-xl p-5 border-l-2 bg-gray-100 text-indigo*/
  font-size: 1.25rem; /*.text-xl*/
  padding: 1.25rem; /*.p-5*/
  border-left-width: 2px; /*.border-l-2*/
  background-color: #f8fafc; /*.bg-gray-100 */
}
/* Icon */
.tab label::after {
  float: right;
  right: 0;
  top: 0;
  display: block;
  width: 1.5em;
  height: 1.5em;
  line-height: 1.5;
  font-size: 1.25rem;
  text-align: center;
  -webkit-transition: all 0.35s;
  -o-transition: all 0.35s;
  transition: all 0.35s;
}
.tab input[type="radio"] + label::after {
  content: "\2304";
}
/* Icon formatting - open */
.tab input[type="radio"]:checked + label::after {
  transform: rotateX(180deg);
  color: #f8fafc; /*.text-grey-lightest*/
}
</style>
