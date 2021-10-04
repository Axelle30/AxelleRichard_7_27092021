<template>
    <div id="user-page">
        <navbar/>
        <div id="user-profile">
            <div id="user-profile-image-container">
                <img src="" alt="Photo de profil"/>
            </div>
            <div id="user-profile-info">
                <h3 id="user-profile-info-username">Nom d'utilisateur : {{ username }}</h3>
                <h4 id="user-profile-info-email">Adresse e-mail : {{email}}</h4>
            </div>
        </div>
        <div id="user-delete-btn-container">
            <button id="user-delete-btn" @click="deleteProfile">Supprimer le profil</button>
        </div>
        <footer/>
    </div>
</template>

<script>
import navbar from './navbar'
import footer from './footer'
export default ({
    name:"profilePage",
    component: {
        navbar,
        footer,
    },
    data: function() {
        return {
            username: localStorage.getItem("username"),
            email: localStorage.getItem("email")
        }
    },
    methods: {
        /*displayProfile: function() {
            const userProfile = document.getElementById("user-profile");
            const userEmail = document.getElementById("")
        },*/
        deleteProfile: function() {
            const authHeaders = {
                "Authorization": localStorage.getItem('token')
            };
            const parameters = {
                method: "DELETE",
                headers: authHeaders,
            };
            fetch("http://localhost:3000/api/user/delete"+localStorage.getItem('userId'), parameters)
            .then(function(res){
                if(res.ok){
                    console.log("Votre compte à bel et bien été supprimé");
                    this.$router.push({name:'/'});
                }
            })
            .catch(function(){
                console.log("Une erreur est survenue. Merci de réessayer plus tard");
            });
        }
    }
})
</script>

<style lang="scss">

</style>