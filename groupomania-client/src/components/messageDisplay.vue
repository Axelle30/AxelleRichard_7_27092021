<template>
    <div id="message-container">
        <!-- Use to display all message by method displayMessageRequest -->
    <div>
</template>

<script>
export default ({
    name: 'messageDisplay',
    methods: {
        displayMessageRequest: function() {
            let messageContainer = document.getElementById("message-container");
            fetch("http://localhost:3000/api/forum")
            .then(function(results){
                for(i in results){
                    let newMessageCard = document.createElement("div");
                    let messageContainerFirstChild = messageContainer.firstChild;
                    messageContainer.insertBefore(newMessageCard, messageContainerFirstChild);
                    newMessageCard.innerHTML =  '<div class="message-card">'+
                                                    '<div class="message-header>'+
                                                        '<h3 class="message-title">' +results.title[i] +'</h3>'+
                                                        '<h4>Posté le'+ results.datetime[i] + 'par' +resuls.user_id[i] + '</h4>'+ 
                                                    '</div>'+
                                                    '<div class="message-body">'+
                                                        '<p class="message-text>'+ results.message[i] + '</p>'+
                                                        '<button id="' +results.id[i] +'" class="see-message-btn btn">Voir le message</button>'+
                                                    '</div>'+
                                                '</div>';

                }
            })
            .catch()
        },
  }
})    

</script>

<style lang="scss">

</style>
