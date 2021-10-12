<template>
    <div id="new-message-form-page">
        <headerComponent/>
        <div id="new-message-form">   
            <h1 id="new-message-form-header">Nouveau Message</h1>
            <button class="btn home-redirection-btn" @click="homePageRedirection">Retour sur la page d'acceuil</button>
            <div class="form-container">
                <input id="new-message-form-title" class="new-message-input" maxlength="50" type="text" required>
                <label for="new-message-form-title">Titre (50 caractères maximum) :</label>
                <textarea id="new-message-form-text" class="new-message-input" maxlength="255" required></textarea>
                <label for="new-message-form-text">Contenu du message (255 caractères maximum) :</label>
                <button id="new-message-form-send" class="btn" @click="sendNewMessage">Envoyer le message</button>
            </div>
        </div>
    </div>
</template>

<script>
import router from '../router/index'
import headerComponent from '../components/header.vue'
export default ({
    name: 'newMessageForm',
    components: {
        headerComponent
    },
    methods: {
        homePageRedirection: function() {
            router.push("/home");
        },
        sendNewMessage: function() {
            console.log("test", localStorage.getItem("token"));
            const newMessageFormTitle = document.getElementById("new-message-form-title");
            const newMessageFormText = document.getElementById("new-message-form-text");
            const parameters = {
                method: "POST",
                headers: {
                    "Content-Type": "Application/Json",
                    "Authorization": localStorage.getItem("token")
                    },
                body: JSON.stringify({
                    user_id: parseInt(localStorage.getItem("userId")),
                    title: newMessageFormTitle.value,
                    message: newMessageFormText.value,
                    token: localStorage.getItem("token")
                })
            };
            console.log(parameters);
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
.form-container {
    border: 2px solid white;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-left: 10%;
    margin-top: 2%; 
}
textarea {
    background: #ffd7d7;
    border-radius: 10px;
    height: 70%;
}
#new-message-form-send {
    margin: 5% 0 2% 45%;
}
.new-message-input {
    width: 50%;
    margin-left: 25%;
    margin-top: 3%;
}
.home-redirection-btn{
    margin-left: 45%
}
</style>