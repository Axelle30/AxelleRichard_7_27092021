<template>
    <div class="home-page">
        <headerComponent/>
        <button @click="displayMessageRequest">TEST TEST TEST</button>
        <h1>Bienvenue sur GroupoForum</h1>
        <div id="message-container">
            <!-- Use to display all message by method displayMessageRequest -->
        </div>        
    </div>         
</template>

<script>
import router from '../router/index'
import headerComponent from '../components/header.vue'
export default ({
    name: 'home',
    components: {
        headerComponent
    },
    methods: {
        displayMessageRequest: function() {
            console.log("La fonction s'execute");
            let messageContainer = document.getElementById("message-container");
            const parameters = {
                method: "GET"
            }
            fetch("http://localhost:3000/api/forum/", parameters)
            .then(function(res){
                if(res.ok){
                    return res.json();
                }
            })
            .then(function(results){
                console.log(results[0].user_id);
                for(let i in results){
                    console.log(results[i])
                    const idParam = results[i].user_id;
                    let username;
                    const url = "http://localhost:3000/api/forum/"+idParam; 
                    fetch(url)
                    .then(function(res){
                        if(res.ok){
                            return res.json();
                        }
                    })
                    .then(function(res){
                        username = res.username;
                    })
                    .catch();
                    let newMessageCard = document.createElement("div");
                    let messageContainerFirstChild = messageContainer.firstChild;
                    messageContainer.insertBefore(newMessageCard, messageContainerFirstChild);
                    let dateTimeSplitted = results[i].datetime.split(" ");
                    console.log(results[i].dateTime);
                    newMessageCard.innerHTML =  '<div class="message-card">'+
                                                    '<div class="message-header>'+
                                                        '<h3 class="message-title">' +results[i].title +'</h3>'+
                                                        '<h4>Posté le'+ dateTimeSplitted[0] + '&nbsp à &nbsp' + dateTimeSplitted[1] + '&nbsp par &nbsp' + username + '</h4>'+ 
                                                    '</div>'+
                                                    '<div class="message-body">'+
                                                        '<p class="message-text>'+ results[i].message + '</p>'+
                                                        '<button id="' +results[i].id +'" class="see-message-btn btn">Voir le message</button>'+
                                                    '</div>'+
                                                '</div>';
                    const redirectionButton = document.getElementById(results.id[i]);
                    redirectionButton.addEventListener('click', function(){
                        router.push({name: "user", params: {messageId: results.id[i] }})
                     })
                }
            })
            .catch()
        },
        newMessageRedirection: function() {
            router.push('new');
        }
  },
})
</script>

<style lang="scss">

</style>