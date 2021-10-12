<template>
    <div id="modify-message-page">
        <headerComponent/>
        <div id="modify-message-display">
        </div>
        <div id="modify-message-container">
            <h1 id="modify-message-form-title">Entrez ci-dessous votre nouveau message</h1>
            <textarea id="modify-message-form-text" maxlength="255" required></textarea>
            <div id="modify-message-form-btn">
                <button id="modify-message-form-modifiy" class="btn" @click="sendModifiedMessage">Modifier</button>
                <button id="modify-message-form-delete" class="btn" @click="deleteMessage">Supprimer</button>
                <p id="unauthorized-message"></p>
            </div>
        </div>
    </div>
</template>

<script>
import router from '../router/index';
import headerComponent from '../components/header.vue'
import messageCard from '../components/messageCard.vue'
import Vue from 'vue'
export default ({
    name: 'newMessageForm',
    components: {
        headerComponent
    },
    mounted() {
        fetch("http://localhost:3000/api/forum/"+localStorage.getItem("messageId"))
        .then(function(res){
            if(res.ok){
                return res.json();
            }
                const unauthorizedMessage = document.getElementById("unauthorized-message")
                unauthorizedMessage.innerHTML = "Vous n'êtes pas authorisé(e) à modifier ce message";
        })
        .then(function(res){
            const date = res[0].datetime.split("T")[0];
            const time = res[0].datetime.split("T")[1].split('Z')[0];
            let messageCardClass = Vue.extend(messageCard)
            let newMessageInstance = new messageCardClass({
            propsData: {
                title: res[0].title,
                date: date,
                time: time,
                username: res[0].username,
                message: res[0].message,
                buttonText: "Retour sur la page d'acceuil",
                modifyMessagePath: "/home"
            }
        })
        /* if(res[0].username != localStorage.getItem("username") && localStorage.getItem("username") !== "groupomaniaRH") {
             const modifyMessagePage = document.getElementById("modify-message-page");
             const modifyMessageContainer = document.getElementById("modify-message-container");
             modifyMessagePage.removeChild(modifyMessageContainer);
         }*/
        const modifyMessageDisplay = document.getElementById("modify-message-display");
        const modifyMessageDisplayFirstChild = modifyMessageDisplay.firstChild;
        const mountNode = document.createElement("div");
        mountNode.id ="mount-node";
        modifyMessageDisplay.insertBefore(mountNode, modifyMessageDisplayFirstChild);
        newMessageInstance.$mount("#mount-node");
        })
        .catch();
    },
    methods: {
        sendModifiedMessage: function() {
            console.log(localStorage.getItem("token"))
            const modifyMessageFormText = document.getElementById("modify-message-form-text");
            const parameters = {
                method: "PUT",
                headers: {
                    "Content-Type": "Application/Json",
                    "Authorization": localStorage.getItem("token")
                    },
                body: JSON.stringify({
                    id: parseInt(localStorage.getItem("messageId")),
                    message: modifyMessageFormText.value,
                    token: localStorage.getItem("token"),
                    user_id: parseInt(localStorage.getItem("userId")),
                })
            };

            fetch("http://localhost:3000/api/forum/"+localStorage.getItem("messageId"), parameters)
            .then(function(res) {
                if (res.ok){
                    console.log("modification du message enregistrée dans la BDD avec succès");
                    router.push("/home");
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
                body: JSON.stringify({
                    token: localStorage.getItem("token"),
                    user_id: parseInt(localStorage.getItem("userId")),
                    })
            }
            fetch("http://localhost:3000/api/forum/"+localStorage.getItem("messageId"), parameters)
            .then(function(res) {
                if (res.ok) {
                    console.log("Message supprimé de la base de données");
                    localStorage.removeItem("messageId");
                    router.push("/home");
                }
            })
            .catch(function(err){
                console.log(err);
                const unauthorizedMessage = document.getElementById("unauthorized-message");
                unauthorizedMessage.innerHTML = "Vous n'êtes pas authorisé(e) à supprimer ce message";
            });
        }
    }
})
</script>

<style lang="scss">
#modify-message-form-delete{
    margin-left: 2%;
    margin-top: 1%;
}

</style>