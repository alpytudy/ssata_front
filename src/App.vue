<template>
  <router-view :key="$route.fullPath"></router-view>
	
</template>

<script type="setup">
import { useRoute } from "vue-router";
const route = useRoute()

export default {
  name: "App",
  data () {
    return {
    }
  },
  components: {

  },
  mounted(){

  },

  methods : {
		
  }
}

</script>


<style>


</style>
