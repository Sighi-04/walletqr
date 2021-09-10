<template>
  <div>
     <nav
      class="navbar navbar-light navbar-sticky sticky-top"
      style="background-color: #EA5D5D;"
    >
      <div class="container-fluid ">
        <li type="none" id="clicca">
          <button
            class="btn p-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <img
              id="preferiti2"
              src="assets/icone/bars_menu.svg"
              alt="menuButton"
              width="34"
              height="34"
              class="d-inline-block align-text-top p-0"
            />
          </button>
          <div
            style="width:85%;max-width:500px"
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                Informazioni
              </h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body" id="menulaterale">
              <div id="container">
                <div class="form-check form-switch">
                  <input
                    @click="theme"
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                  <label class="form-check-label" for="flexSwitchCheckDefault"
                    >Dark mode</label
                  >
                </div>
                <hr />
                <div>
                  <router-link to="backup" class="link" id="bklink">
                    <img src="assets/icone/backup.svg" id="bkIcon">
                    <label id="bkLabel" for="bkIcon">Gestione Dati</label>
                  </router-link>
                </div>
              </div>
              <hr />
              <div></div>
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
                  <img src="assets/icone/sentiment_neutral_black_24dp.svg" style="width: 100px;" class="rounded img-fluid " alt="empty" id="emptyIcon">
                    <figcaption class="figure-caption">Non ci sono codici salvati,<br>
                      premi "+" per aggiungerne uno
                    </figcaption>
                </figure>
               </div>
              </div>
            </div>
          <div v-else><codiceLista v-for="(codice, index) in codici" :key="index" imglogo="assets/icone/tag_black_24dp.svg" :titolo="codice.titolo" :imgtipo="codice.imgtipo" :imgpreferiti="codice.imgpreferiti" :descrizione="codice.descrizione" :isBookmarked="codice.isBookmarked" :tipo="codice.tipo" :contenuto="codice.contenuto"></codiceLista></div>
        </div>
        <div class="position-fixed bottom-0 end-0">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-success mx-3 my-3"><router-link :to="{name: 'scansione', params: {caller: 'lista', action: 'aggiungi', tipo: 'QR', imgpreferiti: 'assets/icone/bookmark.svg', imgtipo: 'assets/icone/qrcode.svg'}}">Aggiungi Codice QR</router-link></button>
          <button type="button" class="btn btn-success mx-3 my-3"><router-link :to="{name: 'scansione', params: {caller: 'lista', action: 'aggiungi', tipo: 'bar', imgpreferiti: 'assets/icone/bookmark.svg', imgtipo: 'assets/icone/barcode.svg'}}">Aggiungi Barcode EAN13</router-link></button>
        </div>
      </div>
    </div>

  </template>

<script>
   
  import codiceLista from './codiceLista.vue'
  import { loadTheme, readLocalStorage, switchTheme} from '../../public/localStorage.js'
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
      },
      methods: {
        theme(){
          switchTheme()
        }
      },
      mounted(){
        loadTheme()
        this.$forceUpdate();
        }
  }




</script>

<style scoped>
  .darkmode {
      background-color: black;
      color: white;
  }
  .btn-group a {
    color: black;
    text-decoration: none;
  }
  .link {
    text-decoration: none;
    color: black;
  }
</style>