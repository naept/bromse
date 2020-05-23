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
          autofocus
        />
          <span class="icon is-right">
            <img src="@/assets/search.svg"/>
          </span>
      </div>

      <div class="container has-text-centered" style="margin-top: auto; margin-bottom: auto;">
        <a role="button" @click="toggleList">
          <img src="@/assets/chevron-right.svg" v-if="showList===false"/>
          <img src="@/assets/chevron-down.svg" v-if="showList===true"/>
        <span style="margin-top: auto; margin-bottom: auto;">{{ $t("perimeterMentionStart") }}{{ nbSearchedSites }}{{ $t("perimeterMentionEnd") }}</span>
        </a>
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
          <li>
            <a role="button" @click="toggleNBSform" v-show="displayNBSform == false">{{ $t("newBookShop") }}</a>
            <input 
              class="input" 
              id="nbsFormInput"
              type="text" 
              v-show="displayNBSform == true" 
              :placeholder="$t('NBSplaceholder')"
              v-model="NBSurl"
              @keydown.enter.exact.prevent
              @keyup.enter.exact="sendNBSissue"
            >
          </li>
        </ul>
      </div>

    </div>
</template>

<script>

import romse from "romse"

export default {

  data(){

    return{
      request: "",
      showList: false,
      displayNBSform: false,
      NBSurl: "",
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

  mounted() {
    this.cleanEngines()
  },

  methods: {

    cleanEngines(){
      this.searchEngines.forEach(engine=>{
        if (engine.search === "true") {
           engine.search = true
        } else {
           engine.search = false
        }       
      })
    },

    toggleNBSform(){
      this.displayNBSform = true
      console.log(document.getElementById('#NBSform'))
      document.getElementById('nbsFormInput').focus()
    },

    sendNBSissue(){
      // create a new issue
      this.NBSurl = ""
      this.displayNBSform = false
    },
    
    toggleList (){
      this.showList = !this.showList
    },

    selectAll (){
      this.searchEngines.forEach(engine=>{
        engine.search = true
      })
    },

    launchRequests (){
      let tabList = []
      this.searchEngines.forEach(engine=>{
        if (engine.search) {
            tabList.push(romse(this.request, engine))
          }
      })

      // goto the first tab opened

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