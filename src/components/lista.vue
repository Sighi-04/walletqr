<template>
     <div>
        <nav class="navbar navbar-light navbar-sticky sticky-top" style="background-color: #EA5D5D;">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img src="assets/Icone/bars_menu.svg" alt="menuButton" width="32" height="32" class="d-inline-block align-text-top">
                Codici Salvati
              </a>
            </div>
        </nav>
         <codiceLista :titolo="titolo" :imglogo="imglogo" :imgtipo="imgtipo" :imgpreferiti="imgpreferiti"></codiceLista>
     </div>
</template>

<script>
import codiceLista from './codiceLista.vue'
    export default {
    name: 'lista',
    components: {
        codiceLista
     },
     props: ['imglogo', 'titolo', 'imgtipo', 'imgpreferiti', 'descrizione', 'isBookmarked', 'tag', 'tipo', 'contenuto']
    }
</script>

