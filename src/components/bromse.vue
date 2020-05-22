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

      <div class="container has-text-centered" style="margin-top: auto; margin-bottom: auto;">
        <a role="button" @click="toggleList">
          <img src="@/assets/chevron-right.svg" v-if="showList===false"/>
          <img src="@/assets/chevron-down.svg" v-if="showList===true"/>
        </a>
        <span style="margin-top: auto; margin-bottom: auto;">{{ $t("perimeterMentionStart") }}{{ nbSearchedSites }}{{ $t("perimeterMentionEnd") }}</span>
      </div>

      <div class="container" style="max-width: 300px;" v-if="showList">
        <ul>
          <li>
            <a role="button" @click="selectAll">
                {{ $t("selectAll") }}
            </a>
          </li>
          <li v-for="engine in searchEngines" :key="engine.name">
            <label class="checkbox">
              <input type="checkbox" v-model="engine.search" :checked="engine.search==='false'? 'disabled' : ''">
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
      showList: false,
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
      console.log(this.searchEngines)
      this.searchEngines.forEach(engine=>{
        if (engine.search) {
            i++
          }
      })

      return i
    }

  },

  methods: {
    
    toggleList (){
      this.showList = !this.showList
    },

    selectAll (){
      this.searchEngines.forEach(engine=>{
        engine.search = true
      })
    },

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