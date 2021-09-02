<template>
     <div>
        <nav class="navbar navbar-light navbar-sticky sticky-top" style="background-color: #EA5D5D;">
            <div class="container-fluid">
              <li type="none">
                <a class="navbar-brand" href="#">
                  <img src="assets/Icone/bars_menu.svg" alt="menuButton" width="34" height="34" class="d-inline-block align-text-top">
                </a>
              </li>
              <div class="text-center">
                    <span class="navbar-brand mb-0 h1">Codici salvati</span>
              </div>
            </div>
        </nav>
        <div class="container"><codiceLista :titolo="titolo" :imglogo="imglogo" :imgtipo="imgtipo" :imgpreferiti="imgpreferiti"></codiceLista></div>

        <div class="position-fixed bottom-0 end-0">
          <a href="scansione">
            <img style="min-width: 50px;" src="assets/Icone/add_circle.svg" alt="lalalal">
          </a>
        </div>
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

