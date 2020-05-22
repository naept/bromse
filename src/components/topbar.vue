<template>
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <img src="@/assets/logo.png" alt="" style="height: 40px; margin-top: auto; margin-bottom: auto; margin-left: 8px;">
        <a role="button" class="navbar-burger burger" :class="showMenu ? 'is-active' : ''" aria-label="menu" aria-expanded="false" data-target="navbarBromse" @click="toggleHamburger">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBromse" class="navbar-menu" :class="showMenu ? 'is-active' : ''">
        <div class="navbar-end">
            <a class="navbar-item" href="https://naept.com/">Naept.com</a>
            <a class="navbar-item" href="https://blog.naept.com/">Blog</a>
            <a role="button" class="navbar-item" @click="changeLang">
                <img v-if="lang=='fr'" src="@/assets/flag_uk.png" style="">    
                <img v-if="lang=='en'" src="@/assets/flag_fr.png" style="">    
            </a>
        </div>    
    </div>

    </nav>    
</template>>

<script>
export default {
    data(){
        return {
            showMenu: false,
        }
    },

    computed:{
        lang(){
            return this.$root.$i18n.locale
        }
    },

    methods:{
        toggleHamburger(){
            this.showMenu = !this.showMenu
        },

        changeLang(){
            if (this.lang ==="fr") {
                this.$i18n.locale = "en"
            } else {
                this.$i18n.locale = "fr"
            }
            
        }
    }
}
</script>
