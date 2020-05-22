<template>
    <div class="control has-icons-right">
      <input 
        input class="input is-rounded" 
        type="text"
        v-model="request"
        :placeholder="$t('placeholder')"
        @keydown.enter.exact.prevent
        @keyup.enter.exact="launchRequests"
      />
        <span class="icon is-right">
          <img src="@/assets/search.svg"/>
        </span>
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

<style scoped>
.control {
  max-width: 500px;
  margin-right: auto;
  margin-left: auto;
}
</style>