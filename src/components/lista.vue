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
        <div class="container"><codiceLista titolo="Titolo di prova" imglogo="assets/icone/test_logo.svg" imgtipo="assets/icone/barcode.svg" imgpreferiti="assets/icone/bookmark.svg"></codiceLista></div>

        <div class="position-fixed bottom-0 end-0">
          <router-link to="scansione">
            <img style="min-width: 50px;" src="assets/Icone/add_circle.svg" alt="lalalal">
          </router-link>
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
  }
</script>

