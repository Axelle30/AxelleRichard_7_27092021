<template>
<div>

    <div id="signup-login-selector">
        <button id="login">Log In</button>
        <button id="signup">Sign Up</button>
    </div>
    <div id="signup-form">
        <input type="text" id="signup-username">
        <label for="signup-username">Nom d'utilisateur</label>
        <input type="signup-email" id="email">
        <label for="signup-email">Adresse e-mail</label>   
        <input type="signup-password" id="password">
        <label for="signup-password">Mot de passe</label> 
    </div>
    <div id="login-form">
        <input type="email" id="login-email">
        <label for="login-email">Adresse e-mail</label>   
        <input type="login-password" id="password">
        <label for="login-password">Mot de passe</label> 
    </div>
    <button id="send">Envoyer</button>
    <div>
        <img src="../assets/icon-above-font.png" alt="groupomania logo"/>
    </div>
</div>
</template>

<script>
export default ({
    name: 'loginForm',
    methods: {
        signupSelected: function() {

        },
        loginSelected: function() {

        },
        loginSend: function() {
            const loginPassword = document.getElementById("login-password");
            const loginEmail = document.getElementById("login-email");
            const parameter = {
                method: "POST",
                body: JSON.stringify({
                    email: loginEmail.value,
                    password: loginPassword.value
                })
            }
            fetch("http://localhost:3000/api/user/login", parameter)
            .then(function(res){
                if(res.ok){
                    console.log("Création de compte réussie")
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
                body: JSON.stringify({
                    email: signupEmail.value,
                    password: signupPassword.value,
                    username: signupUsername.value
                })
            }
            fetch("http://localhost:3000/api/user/login", parameter)
            .then(function(res){
                if(res.ok){
                    localStorage.setItem('userId', res.userId);
                    localStorage.setItem('token',res.token );
                    console.log("Connexion effectuée avec succès !")
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
</style>
