<template>
    <div>
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

      <div class="container has-text-centered">Votre recherche sera exécutée sur {{ nbSearchedSites }} sites (onglets)</div>

      <div class="container" style="max-width: 300px;">
        <ul>
          <li v-for="engine in searchEngines" :key="engine.name">
            <label class="checkbox">
              <input type="checkbox" v-model="engine.search" checked="engine.search">
                {{ engine.name }}
            </label>
            
          </li>
        </ul>
      </div>

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
          //search: true
        }
      })
    }

  },

  computed:{

    nbSearchedSites: function(){
      let i = 0
      this.searchEngines.forEach(engine=>{
        if (engine.search) {
            i++
          }
      })

      return i
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