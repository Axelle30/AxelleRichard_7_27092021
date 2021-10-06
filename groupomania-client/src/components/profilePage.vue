<template>
    <div id="user-page">
        <headerComponent />
        <div id="user-profile">
            <div id="user-profile-image-container">
                <img src="" alt="Photo de profil"/>
            </div>
            <div id="user-profile-info">
                <h3 id="user-profile-info-username">Nom d'utilisateur : {{ username }}</h3>
                <h4 id="user-profile-info-email">Adresse e-mail : {{email}}</h4>
            </div>
        </div>
        <div id="user-btn-container">
            <button id="user-return-btn" @click="returnToHome">Retour sur la page d'acceuil</button>
            <button id="user-delete-btn" @click="deleteProfile">Supprimer le profil</button>
        </div>
        <footer/>
    </div>
</template>

<script>
import router from '../router/index'
import headerComponent from '../components/header.vue'
export default ({
    name:"profilePage",
    components: {
        headerComponent,
    },
    data: function() {
        return {
            username: localStorage.getItem("username"),
            email: localStorage.getItem("email")
        }
    },
    methods: {
        deleteProfile: function() {
            const authHeaders = {
                "Authorization": localStorage.getItem('token'),
                "Content-Type": "Application/Json"
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
        },
        returnToHome: function() {
            router.push("home");
        }
    }
})
</script>

<style lang="scss">
#user-profile {
    margin-top: 20%;
}
#user-delete-btn {
    margin-left: 10%;
}
</style>