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
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">Informazioni</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <div id="container">
              <div class="form-check form-switch">
                <input onclick="document.body.classList.toggle(dark-mode)" class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                  <label class="form-check-label" for="flexSwitchCheckDefault">Dark mode</label>
              </div>   
              </div>
              <hr>
            <div>
    </div>
  </div>
  </div>
  </li>
            <div class="text-center">
              <span class="navbar-brand mb-0 h1">Codici salvati</span>
            </div>
          </div>
        </nav>
        <div class="container">
          <div v-if="codici==null">
            <div class="container my-5">
              <div class="text-center py-5">
                <figure class="figure ">
                  <img src="Assets/Icone/empty.svg" style="width: 100px;" class="rounded img-fluid " alt="empty">
                    <figcaption class="figure-caption">Non ci sono codici salvati,<br>
                      premi "+" per aggiungerne uno
                    </figcaption>
                </figure>
               </div>
              </div>
            </div>
          <div v-else><codiceLista v-for="(codice, index) in codici" :key="index" imglogo="assets/Icone/tag_black_24dp.svg" :titolo="codice.titolo" :imgtipo="codice.imgtipo" :imgpreferiti="codice.imgpreferiti" :descrizione="codice.descrizione" :isBookmarked="codice.isBookmarked" :tipo="codice.tipo" :contenuto="codice.contenuto"></codiceLista></div>
        </div>
        <div class="position-fixed bottom-0 end-0">
        <router-link :to="{name: 'scansione', params: {caller: 'lista', action: 'aggiungi'}}">
          <img style="min-width: 50px;" src="assets/Icone/add_circle.svg" alt="aggiungi">
        </router-link>
      </div>
    </div>
  </template>

<script>
   
  import codiceLista from './codiceLista.vue'
  import { readLocalStorage} from '../../public/localStorage.js'
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

<style scoped>
  .darkmode{
      background-color: black;
      color: white;
  }
</style>
