<template>
    <div id="header-container">
        <nav>
            <div id="navbar-logo">
                <img src="../assets/icon-left-font-monochrome-white.svg" alt="groupomania logo" id="navbar-logo-image"/>
            </div>    
            <div id="navbar-link-container">
                <div class=navbar-link-div>
                    <router-link class="navbar-link" to="/user">Mon Profil</router-link>
                </div>
                <div class=navbar-link-div>
                    <router-link class="navbar-link" to="/home">GroupoForum</router-link>
                </div>
                <div class=navbar-link-div>
                    <router-link class="navbar-link" to="/construction">GroupoMedia</router-link>
                </div>
                <div class=navbar-link-div>
                    <router-link class="navbar-link" to="/">Log Out</router-link>
                </div>
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
    max-width: 60%;
}
#header-container {
    height: 30%;
    width: 100%;
    box-shadow: 1px 10px 5px 0px #323232;
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
    margin-top: 0.5%;
    display: flex;
    width: 40%;
    justify-content: flex-end;
}
.navbar-link-div {
    margin-right: 2%
}
.navbar-link {
    text-decoration: none;
    color: white;

}
.navbar-link:hover {
    color: #FFD7D7;
    border-bottom: 3px solid #FFD7D7;
    padding-bottom: 3%;
}

</style>
