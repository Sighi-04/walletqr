<template>
     <div>
        <nav class="navbar navbar-light navbar-sticky sticky-top" style="background-color: #EA5D5D;">
            <div class="container-fluid ">
              <li type="none" id="clicca">
                <button class="btn p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                  <img id="preferiti2" src="assets/Icone/bars_menu.svg" alt="menuButton" width="34" height="34" class="d-inline-block align-text-top p-0"> 
                </button>
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Opzioni</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                    <hr>
                    <div>
                      
                    </div>
                    <div class="dropdown mt-3">
                    </div>
                  </div>
              </div>
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
            <img style="min-width: 50px;" src="assets/Icone/add_circle.svg" alt="aggiungi">
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

<!--<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  
</button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>-->