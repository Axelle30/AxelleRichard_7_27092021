<template>
<div id="login-page">
    <div>
        <h1>Bienvenue sur le réseau d'entreprise Groupomania</h1>
        <div id="signup-login-selector">
            <button id="login" class="login-page-form-select-btn" @click="showLoginForm = !showLoginForm, showSignupForm = !showSignupForm">Log In</button>
            <button id="signup" @click="showSignupForm = !showSignupForm, showLoginForm = !showLoginForm">Sign Up</button>
        </div>
        <div id="signup-form" v-show="showSignupForm">
            <h2>Créez un compte</h2>
            <input class="login-page-form-input" type="text" id="signup-username">
            <label for="signup-username">Nom d'utilisateur</label>
            <input class="login-page-form-input" type="email" id="signup-email">
            <label for="signup-email">Adresse e-mail</label>   
            <input type="password" id="signup-password">
            <label class="login-page-form-input" for="signup-password">Mot de passe</label>
            <button class="send-btn" id="signup-send" @click="signupSend">Envoyer</button> 
        </div>
        <div id="login-form" v-show="showLoginForm">
            <h2>Connexion</h2>
            <input class="login-page-form-input" type="email" id="login-email">
            <label for="login-email">Adresse e-mail</label>   
            <input class="login-page-form-input" type="password" id="login-password">
            <label for="login-password">Mot de passe</label> 
            <button class="send-btn" id="login-send" @click="loginSend">Envoyer</button>
        </div>
        <div>
            <img src="../assets/icon-above-font.png" alt="groupomania logo"/>
        </div>
    </div>
</div>
</template>

<script>
import router from '../router/index'
export default ({
    name: 'loginForm',
    data: function() {
        return {
            showLoginForm: false,
            showSignupForm: true
        }
    },
    methods: {
        loginSend: function() {
            const loginPassword = document.getElementById("login-password");
            const loginEmail = document.getElementById("login-email");
            const parameter = {
                method: "POST",
                headers: {"Content-Type": "application/Json"},
                body: JSON.stringify({
                    email: loginEmail.value,
                    password: loginPassword.value
                })
            }
            console.log(parameter);
            fetch("http://localhost:3000/api/user/login", parameter)
            .then(function(res){
                if(res.ok){
                    console.log("Connexion réussie");
                    router.push({name: "home"});
                }
            })
            .catch();
        },
        signupSend: function() {
            const signupPassword = document.getElementById("signup-password");
            const signupEmail = document.getElementById("signup-email");
            const signupUsername = document.getElementById("signup-username");
            const parameter = {
                method: "POST",
                headers: {"Content-Type": "application/Json"},
                body: JSON.stringify({
                    email: signupEmail.value,
                    password: signupPassword.value,
                    username: signupUsername.value
                })
            }
            console.log(parameter);
            fetch("http://localhost:3000/api/user/signup", parameter)
            .then(function(res){
                if(res.ok){
                    localStorage.setItem('userId', res.userId);
                    localStorage.setItem('token',res.token );
                    localStorage.setItem('username', signupUsername.value);
                    localStorage.setItem('email', signupEmail.value );
                    this.$router.push({name: "home"});
                    console.log("Connexion effectuée avec succès !");
                }
            })
            .catch();
        }
    }
})
</script>

<style lang="scss">
#login {
    margin-right: 10%;
    margin-bottom: 2%;
}
#signup {
    margin-left: 10%;
    margin-bottom: 2%;
}
#signup-form {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: 25%;
}
#login-form {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: 25%;
}
.send-btn {
    margin-top: 5%;
    width: 50%;
    margin-left: 25%;
}

.login-page-form-input {
    margin-top: 2%;
}
</style>
