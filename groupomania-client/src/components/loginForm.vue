<template>
<div id="login-page">
    <div>
        <div>
            <img class="logo-img" src="../assets/icon-left-font-monochrome-white.svg" alt="groupomania logo"/>
        </div>
        <h1>Bienvenue sur le réseau d'entreprise Groupomania</h1>
        <div id="signup-login-selector">
            <button id="login" class="login-page-form-select-btn btn" @click="showLoginForm = !showLoginForm, showSignupForm = !showSignupForm, menuSelector">Log In</button>
            <button id="signup" class="login-page-form-select-btn btn" @click="showSignupForm = !showSignupForm, showLoginForm = !showLoginForm, menuSelector">Sign Up</button>
        </div>
        <div id="signup-form" v-show="showSignupForm">
            <h2>Créez un compte</h2>
            <input class="login-page-form-input" type="text" id="signup-username" required>
            <label for="signup-username">Nom d'utilisateur</label>
            <input class="login-page-form-input" type="email" id="signup-email" required>
            <label for="signup-email">Adresse e-mail</label>   
            <input type="password" id="signup-password" required>
            <label class="login-page-form-input" for="signup-password">Mot de passe</label>
            <button class="send-btn btn" id="signup-send" @click="signupSend">Envoyer</button> 
        </div>
        <div id="login-form" v-show="showLoginForm">
            <h2>Connexion</h2>
            <input class="login-page-form-input" type="email" id="login-email" required>
            <label for="login-email">Adresse e-mail</label>   
            <input class="login-page-form-input" type="password" id="login-password" required>
            <label for="login-password">Mot de passe</label> 
            <button class="send-btn btn" id="login-send" @click="loginSend">Envoyer</button>
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
        menuSelector: function() {
            let showLoginForm;
            let showSignupForm;
            if(showLoginForm == true){
                showSignupForm = false;
            }
            if(showSignupForm == true){
                showLoginForm = false;
            }
        },
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
            fetch("http://localhost:3000/api/user/login", parameter)
            .then(function(res){
                if(res.ok){
                    res.json()
                    .then(function(res){
                    localStorage.setItem('token', res.token);
                    localStorage.setItem('username', res.username);
                    localStorage.setItem('email', loginEmail.value );
                    localStorage.setItem('userId', res.userId)
                    console.log("Connexion réussie");
                    router.push('home');
                    })

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
                    router.push('home');
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
.logo-img {
    fill: #041185;
}
#login-form {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: 25%;
}
.send-btn {
    margin-top: 5%;
    width: 50%!important;
    margin-left: 25%;
}
.btn {
   border-radius: 30px;
   width: 10%;
   background-color: black;
   border-color: black;
   color: #FFFF;
}
.btn:hover {
    background-color: #ffd7d7;
    color: black;
}
</style>
