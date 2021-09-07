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
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" ><p>#0 "A <strong>cosa serve </strong>quest'app?"</p> </button>
                  </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">Questa app è un portafoglio di di codici!<br> Attraverso la scannerizzazione dei codici all'interno di quest'app, l'algoritmo potrà memorizzare e ricreare quando più ne hai bisogno il codice che ti serve senza che l'immagine possa dare probllemi di risoluzione , dovuti per esempio alla fotocamera o alla qualità dell'immagine</div>
                </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><p class="
                py-0">#1 "Come si <strong>aggiungono</strong> i codici?"</p> </button>
              </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">Nella schermata principale, clicca il pulsante "+" in basso a destra. Dopo aver scansionato, aggiungi il nome e una descrizione. Finito il procedimento , tornerai alla schermata principale , dove potrai vedere nella tua lista, il tuo codice.
          </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><p>#2 "Dove si <strong>vedono</strong> i codici scannerizzati?" </p></button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">Per rivedere il codice che hai scannerizzato, devi andare nella schermata principale e cliccare il codice che desideri visualizzare, nella schermata successiva troverai il codice che hai scannerizzato</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"><p>#3 "Dove si <strong>modificano o eliminano</strong> i codici?"</p></button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">Hai la possibilità di interagire e modificare con il tuo codice cliccando il codice desiderato nella schermata principale. Oltre al nome e alla descrizione del codice l'applicazione dispone di 3 pulsanti:
              <ul>
                <li>Il pulsante "elimina", dove potrai eliminare il codice</li>
                <li>Il pulsante "modifica" dove potrai modificare il codice,ripetendo il procedimento fatto con il tasto "+"</li>
                <li>E il pulsante "preferiti" che permette di fissare tra i primi della lista, i tuoi codici</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
