<template>
<header>
    <nav>
        <div id="navbar-logo">
            <img src="" alt="groupomania logo" id="navbar-logo-image"/>
        </div>    
        <div id="navbar-link-container">
            <router-link class="navbar-link" to="/user">Mon Profil</router-link>
            <router-link class="navbar-link" to="/home">GroupoForum</router-link>
            <router-link class="navbar-link" to="/construction">GroupoMedia</router-link>
            <router-link class="navbar-link" to="/">Log Out</router-link>
        </div>
    </nav>
</header>    
</template>

<script>
export default ({
    name:"navbar",
    methods: {
        logOutLocalStorageClear: function() {
            localStorage.clear();   
        }
    }
})
</script>

<style lang="scss">

</style>
