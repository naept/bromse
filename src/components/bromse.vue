<template>
    <div>
      <input 
        v-model="request"
        placeholder="Enter a book request + Enter"
        @keydown.enter.exact.prevent
        @keyup.enter.exact="launchRequests"
      />
    </div>
</template>

<script>

import romse from "romse"
//import * as data from "../engines.json"

export default {

  data(){

    return{
      request: "",
      searchEngines: require("../engines.json").map(engine=>{
        return{
          ...engine,
          search: true
        }
      })
    }

  },

  methods: {
  
    launchRequests (){

      this.searchEngines.forEach(engine=>{
        if (engine.search) {
            romse(this.request, engine)
          }
      })
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
