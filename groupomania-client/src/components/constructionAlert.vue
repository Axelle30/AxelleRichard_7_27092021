<template>
    <div id="construction-page">
        <headerComponent/>
        <div id="construction-alert">
            <h3 id="construction-title">Page en construction</h3>
            <p id="construction-text">Cette page est en cours de construction<br/>Merci de bien vouloir nous excuser pour le désagrèment</p>
            <button class="btn" id="return-button">Retour à l'acceuil</button>
        </div>
        <footer/>
    </div>    
</template>

<script>
import headerComponent from '../components/header.vue'
export default ({
    name:"constructionAlert",
    components: {
        headerComponent
    }
})
</script>

<style lang="scss">
#construction-title {
    width: 50%;
    margin-left: 25%;
}
#construction-alert {
    margin-top: 10%;
    border: 2px solid white;
    width:50%;
    margin-left: 25%;
}
#return-button {
    width: 80%!important;
    margin-bottom: 5%;
}
</style>