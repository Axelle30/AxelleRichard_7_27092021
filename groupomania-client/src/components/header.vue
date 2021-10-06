<template>
    <div id="header-container">
        <nav>
            <div id="navbar-logo">
                <img src="../assets/icon-left-font-monochrome-black.svg" alt="groupomania logo" id="navbar-logo-image"/>
            </div>    
            <div id="navbar-link-container">
                <router-link class="navbar-link" to="/user">Mon Profil</router-link>
                <router-link class="navbar-link" to="/home">GroupoForum</router-link>
                <router-link class="navbar-link" to="/construction">GroupoMedia</router-link>
                <router-link class="navbar-link" to="/">Log Out</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name:'headerComponent',
}
</script>


<style lang="scss">
#navbar-logo-image{
    max-width: 70%;
}
#header-container {
    height: 30%;
    width: 100%;
}
nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    
}
#navbar-logo {
    margin-right: 0%
}
#navbar-link-container {
    justify-content: flex-end;
}
.navbar-link {
    padding-right: 5%;
    text-decoration: none;
    color: black;
}

</style>
