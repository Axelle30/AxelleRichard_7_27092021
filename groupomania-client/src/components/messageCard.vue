<template>
    <div class="message-card">
        <div class="message-header">
            <h3 class="message-header-title">{{title}}</h3>
            <div class="message-card-body">
                <p class="message-body-text">{{message}}</p>
            <div class="message-header-infos">
                <p class="message-header-info-text">Posté le {{date}} à {{time}} par {{username}}</p>
            </div>
                <button @click="redirectionToModifyMessage" class="btn modify-message-redirection-btn">{{buttonText}}</button>
            </div>
        </div>
    </div>
</template>

<script>
import router from "../router/index"
export default {
    name: "messageCard",
    props: ['title', 'date', 'time', 'username', 'message', 'modifyMessagePath', 'buttonText'],
    methods: {
        redirectionToModifyMessage: function() {
            router.push(this.modifyMessagePath)
            localStorage.removeItem("messageId");
            localStorage.setItem("messageId", this.modifyMessagePath.split("/")[2]);
        }
    }
}
</script>

<style lang="scss">
.message-header-title {
    margin-top: 5%;
    text-decoration: underline;
}
.message-header-info {
    font-size: 0.5rem;
}
.message-body-text {
    font-size: 1.1rem;
}
.message-card {
    border: 2px solid white;
    margin-top: 5%;
    margin-left: 15%;
    width: 70%;
    max-height: 1%;
    height: 2%;
}
.modify-message-redirection-btn {
    margin-bottom: 5%;
    width: 50%
}
</style>
