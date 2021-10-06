<template>
    <div id="modify-message-form">
        <h1 id="modify-message-form-title">Entrez ci-dessous votre nouveau message</h1>
        <textarea id="modify-message-form-text" maxlength="255" required></textarea>
        <div id="modify-message-form-btn">
            <button id="modify-message-form-modifiy" @click="sendModifiedMessage">Modifier</button>
            <button id="modify-message-form-delete" @click="deleteMessage">Supprimer</button>
        </div>
    </div>
</template>

<script>
import router from '../router/index';
export default ({
    name: 'newMessageForm',
    methods: {
        sendModifiedMessage: function() {
            const modifyMessageFormText = document.getElementById("modify-message-form-text");
            const parameters = {
                method: "PUT",
                headers: {
                    "Content-Type": "Application/Json",
                    "Authorization": localStorage.getItem("token")
                    },
                body: JSON.stringify({
                    user_id: localStorage.getItem("userId"),
                    message: modifyMessageFormText.value,
                })
            };
            fetch("http://localhost:3000/api/forum/1"/*+router.params.id*/, parameters)
            .then(function(res) {
                if (res.ok){
                    console.log("modification du message enregistrée dans la BDD avec succès");
        
                    /*Inserer ici redirection vers /home */
                }
            })
            .catch();
        },
        deleteMessage: function() {
            const parameters = {
                method: "DELETE",
                headers: {
                    "Content-Type": "Application/Json",
                    "Authorization": localStorage.getItem("token")
                    },
            }
            fetch("http://localhost:3000/api/forum/"+router.params.id, parameters)
            .then(function(res) {
                if (res.ok) {
                    console.log("Message supprimé de la base de données");
                    localStorage.removeItem("messageId");
                    /*Inserer ici redirection ver /home */
                }
            })
            .catch();
        }
    }
})
</script>

<style lang="scss">

</style>