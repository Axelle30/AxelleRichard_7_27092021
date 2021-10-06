<template>
    <div id="new-message-form-page">
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
        <div id="new-message-form">   
            <h1 id="new-message-form-header">Nouveau Message</h1>
            <input id="new-message-form-title" maxlength="50" type="text" required>
            <label for="new-message-form-title">Titre (50 caractères maximum) :</label>
            <textarea id="new-message-form-text" maxlength="255" required></textarea>
            <button id="new-message-form-send" @click="sendNewMessage"></button>
        </div>
    </div>
</template>

<script>
import router from '../router/index'
export default ({
    name: 'newMessageForm',
    methods: {
        sendNewMessage: function() {
            const newMessageFormTitle = document.getElementById("new-message-form-title");
            const newMessageFormText = document.getElementById("new-message-form-text");
            const parameters = {
                method: "POST",
                headers: {
                    "Content-Type": "Application/Json",
                    "Authorization": localStorage.getItem("token")
                    },
                body: JSON.stringify({
                    user_id: localStorage.getItem("userId"),
                    title: newMessageFormTitle.value,
                    message: newMessageFormText.value,
                })
            };
            fetch("http://localhost:3000/api/forum", parameters)
            .then(function(res) {
                if (res.ok){
                    console.log("Nouveau Message enregistré dans la BDD avec succès");
                    router.push('home');
                }
            })
            .catch(function(){
                console.log("Erreur Serveur");
            });
        }
    }
})
</script>

<style lang="scss">
#new-message-form {
    display: flex;
    flex-direction: column;
}

</style>