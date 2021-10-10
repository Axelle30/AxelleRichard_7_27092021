<template>
    <div class="home-page" :key="temp">
        <headerComponent/>
        <h1>Bienvenue sur GroupoForum</h1>
        <button @click="newMessageRedirection" class="btn new-message-btn">Ecrire un nouveau message</button>
        <div id="message-container" >
            <!-- Use to display all message by method displayMessageRequest -->
        </div>        
    </div>         
</template>

<script>
import router from '../router/index'
import headerComponent from '../components/header.vue'
import messageCard from '../components/messageCard.vue'
import Vue from 'vue'
export default ({
    name: 'home',
    components: {
        headerComponent,
    },
    methods: {
        newMessageRedirection: function() {
            router.push('/new');
        }
  },
  mounted() {
    localStorage.removeItem("messageId");
    fetch('http://localhost:3000/api/forum')
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(res){
        for (let i in res){
        let messageCardClass = Vue.extend(messageCard)
        let date = res[i].datetime.split("T")[0];
        let time = res[i].datetime.split("T")[1].split('Z')[0];
        let newMessageInstance = new messageCardClass({
            propsData: {
                title: res[i].title,
                date: date,
                time: time,
                username: res[i].username,
                message: res[i].message,
                modifyMessagePath: "/thread/"+res[i].message_id,
                buttonText: "Voir le message"
            }
        })
        const messageContainer = document.getElementById("message-container");
        const messageContainerFirstChild = messageContainer.firstChild;
        const mountNode = document.createElement("div");
        mountNode.id = "mount-node";
        messageContainer.insertBefore(mountNode, messageContainerFirstChild);
        newMessageInstance.$mount("#mount-node")
    }
    })
    .catch();
  }
})
</script>

<style lang="scss">
.new-message-btn {
    width: 50%;
}
</style>