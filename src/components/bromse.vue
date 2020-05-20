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

export default {

  data(){

    return{
      request: "",
      searchEngines:[
        {
          name: "Paris Librairie",
          prefix: "https://www.parislibrairies.fr/listeliv.php?base=allbooks&mots_recherche=",
          union: "+",
          suffix: "",
          search: true,
        },
        {
          name: "Libraires Indépendantes",
          prefix: "https://www.librairiesindependantes.com/product/search/?query=",
          union: "+",
          suffix: "",
          search: true,
        },
        {
          name: "leslibraires.fr",
          prefix: "https://www.leslibraires.fr/recherche/?q=",
          union: "+",
          suffix: "",
          search: true,
        },
        {
          name: "Gibert",
          prefix: "https://www.gibert.com/catalogsearch/result/?q=",
          union: "+",
          suffix: "",
          search: true,
        },
        {
          name: "Place des Libraires",
          prefix: "https://www.placedeslibraires.fr/listeliv.php?base=allbooks&mots_recherche=",
          union: "+",
          suffix: "",
          search: true,
        }
      ]
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
