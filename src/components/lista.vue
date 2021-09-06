<template>
     <div>
        <nav class="navbar navbar-light navbar-sticky sticky-top" style="background-color: #EA5D5D;">
            <div class="container-fluid ">
              <li type="none" id="clicca">
                <a class="navbar-brand" href="#">
                  <img id="preferiti2" src="assets/Icone/bookmark.svg" alt="menuButton" width="34" height="34" class="d-inline-block align-text-top">
                </a>
              </li>
              <div class="text-center">
                    <span class="navbar-brand mb-0 h1">Codici salvati</span>
              </div>
            </div>
        </nav>
        <div class="container my-2">
          <codiceLista titolo="prova" imglogo="assets/icone/test_logo.svg" imgtipo="assets/icone/barcode.svg" imgpreferiti="assets/icone/bookmark.svg">
          </codiceLista>
        </div>

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
     }
     /*
     data(){
       
       let esempi = [
         {
            imglogo: "assets/icone/test_logo.svg",
            titolo: "codice prova 1",
            imgtipo: "assets/icone/barcode.svg",
            imgpreferiti: "assets/icone/bookmark.svg",
            descrizione: "descrizione codice prova 1",
            isBookmarked: false,
            tag: "tag prova",
            tipo: "QR",
            contenuto: "contenutopazzo"
         },
         {
            imglogo: "assets/icone/test_logo.svg",
            titolo: "codice prova 2",
            imgtipo: "assets/icone/qrcode.svg",
            imgpreferiti: "assets/icone/bookmark_fill.svg",
            descrizione: "descrizione codice prova 2",
            isBookmarked: true,
            tag: "tag prova",
            tipo: "QR",
            contenuto: "contenutopazzo"
         },
         {
            imglogo: "assets/icone/test_logo.svg",
            titolo: "codice prova 3",
            imgtipo: "assets/icone/barcode.svg",
            imgpreferiti: "assets/icone/bookmark.svg",
            descrizione: "descrizione codice prova 3",
            isBookmarked: false,
            tag: "tag prova",
            tipo: "QR",
            contenuto: "contenutopazzo"
         },
         {
            imglogo: "assets/icone/test_logo.svg",
            titolo: "codice prova 4",
            imgtipo: "assets/icone/qrcode.svg",
            imgpreferiti: "assets/icone/bookmark_fill.svg",
            descrizione: "descrizione codice prova 4",
            isBookmarked: true,
            tag: "tag prova",
            tipo: "QR",
            contenuto: "contenutopazzo"
         }
       ]
       let stringa = JSON.stringify(esempi)
       localStorage.setItem("Codici", stringa)
       */
  }
  
</script>

