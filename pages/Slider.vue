<template>
  <div id="app">

    <div class="">

  <Slider />
    </div>
  </div>
</template>

<script>
import Slider from "~/components/Slider";
export default {
  components: {
    Slider
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0px;
}
</style>