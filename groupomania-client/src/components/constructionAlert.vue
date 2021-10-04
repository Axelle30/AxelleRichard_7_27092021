<template>
    <div id="construction-page">
        <navbar/>
        <div id="construction-alert">
            <h3 id="construction__title">Page en construction</h3>
            <p id="construction__text">Cette page est en cours de construction<br/>Merci de bien vouloir nous excuser pour le désagrèment</p>
            <router-link to="/home">Retour à l'acceuil</router-link>
        </div>
        <footer/>
    </div>    
</template>

<script>
import navbar from './navbar'
import footer from './footer'
export default ({
    name:"constructionAlert",
    component: {
        navbar,
        footer,
    }
})
</script>

<style lang="scss">

</style>