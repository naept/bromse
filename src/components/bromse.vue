<template>
    <div>
      <div class="field has-addons is-research-field">
        <div class="control">
          <input 
            input class="input is-rounded" 
            type="text"
            v-model="request"
            :placeholder="$t('placeholder')"
            @keydown.enter.exact.prevent
            @keyup.enter.exact="launchRequests"
            autofocus
          />
        </div>
        <div class="control">
          <button class="button is-rounded" @click="launchRequests" :disabled="request.length===0">
            <img src="@/assets/search.svg"/>
          </button>
        </div>
      </div>

      <div class="level" style="margin-top: auto; margin-bottom: auto;">
        <a role="button" @click="toggleList" class="level-item has-text-centered is-red">
          <img src="@/assets/chevron-right.svg" v-if="showList===false"/>
          <img src="@/assets/chevron-down.svg" v-if="showList===true"/>
          <span>{{ $t("perimeterMentionStart") }}{{ nbSearchedSites }}{{ $t("perimeterMentionEnd") }}</span>
        </a>
      </div>

      <div class="container" style="max-width: 400px;" v-if="showList">
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
            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfnKxBMZaeIEVF-0iOVuAKaJz30ziwupL58yqb9IKA-4vaC4g/viewform">{{ $t("newBookShop") }}</a>
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
      searchEngines: require("../engines.json").map(engine=>{
        return{
          ...engine,
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

    toggleList (){
      this.showList = !this.showList
    },

    selectAll (){
      this.searchEngines.forEach(engine=>{
        engine.search = true
      })
    },

    launchRequests (){
      let engines = [...this.searchEngines]
      let tabList = []
      engines.reverse().forEach((engine)=>{
        if (engine.search) {
          tabList.push(romse(this.request, engine))
        } 
      })

      if (tabList.some(tab=>tab==null)) {
        this.$emit("showDisclaimer")
      }
    }
  }

}
</script>

<style scoped>
.is-research-field {
  max-width: 500px;
  margin-right: auto;
  margin-left: auto;
}
.is-research-field > .control:first-child {
  width: 100%;
}
.is-red{
  color: red;
  font-size: 0.85rem;
}

</style>