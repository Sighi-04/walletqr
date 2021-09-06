<template>
  <div>
    <nav class="navbar navbar-light navbar-sticky sticky-top" style="background-color: #EA5D5D;">
      <div class="container-fluid ">
        <li type="none" id="clicca">
          <button class="btn p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <img id="preferiti2" src="assets/Icone/bars_menu.svg" alt="menuButton" width="34" height="34" class="d-inline-block align-text-top p-0"> 
          </button>
          <div style="width:85%;max-width:500px" class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">Opzioni</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
            <div>
              <div class="accordion shadow p-3 mb-5 bg-body rounded" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">A cosa serve quest'app? #0</button>
                  </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">Questa app serve per</div>
                </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Come si aggiungono i codici #1</button>
              </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">aaaaaaaa</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Come si modificano i codici #2</button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">aaaa</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Come si cancellano i codici #3</button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">aaaaaa</div>
          </div>
        </div>
      </div>
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
        <div class="container"><codiceLista v-for="(codice, index) in codici" :key="index" :imglogo="codice.imglogo" :titolo="codice.titolo" :imgtipo="codice.imgtipo" :imgpreferiti="codice.imgpreferiti" :descrizione="codice.descrizione" :isBookmarked="codice.isBookmarked" :tipo="codice.tipo" :contenuto="codice.contenuto"></codiceLista></div>
        <div class="position-fixed bottom-0 end-0">
        <router-link to="scansione">
          <img style="min-width: 50px;" src="assets/Icone/add_circle.svg" alt="aggiungi">
        </router-link>
      </div>
    </div>
  </template>

<script>
import codiceLista from './codiceLista.vue'
import { readLocalStorage } from '../../public/localStorage.js'
export default {
name: 'lista',
components: {
    codiceLista
 },
 data(){
    let salvati = readLocalStorage();
    return {
      codici: salvati
    }
 }
}
</script>
