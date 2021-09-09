<template>
<div>
    <nav class="navbar navbar-light" style="background-color: #EA5D5D;">
            <div class="container-fluid">
                <router-link to="/">
                    <img src="assets/Icone/back_arrow.svg" alt="indietro" width="34" height="34">
                </router-link>
                <div class="text-center">
                    <span class="navbar-brand mb-0 h1">{{titolo}}</span>
                </div>
            </div>
    </nav>
        <div class="container my-4">
                <figure class="figure">
                    <figcaption class="figure-caption"><h3>Descrizione</h3><br><br>{{descrizione}}</figcaption>
                  </figure>
                <div class="container my-5 text-center">
                    <VueQrCode class="" style="width:300px" :value="contenuto"></VueQrCode>
                </div>
        </div>
        <div class="container text-center my-5">
            <div class="row pt-5">
              <div class="col">
                  <button type="button"  class="btn p-0 shadow-sm p-3 mb-5 bg-body rounded" data-bs-toggle="modal" data-bs-target="#myModal" >
                        <img class="img-thumbnail" width="40px" src="assets/Icone/delete_icon.svg">
                  </button>
             </div>
              <div class="col">
                  <router-link :to="{name: 'dettagli', params: {caller: 'visualizza', titolo: titolo, descrizione: descrizione, contenuto: contenuto, tipo: tipo, imgpreferiti: imgpreferiti, isBookmarked:isBookmarked, action: 'modifica'}}">
                    <button type="button"  class="btn p-0 shadow-sm p-3 mb-5 bg-body rounded">
                        <img class="img-thumbnail" width="40px" src="assets/Icone/edit_icon.svg">
                    </button>                      
                  </router-link>
            </div>
            <div class="col">
                    <button  type="button" id="bookmark" class="btn p-0 shadow-sm p-3 mb-5 bg-body rounded">
                        <img id="preferiti" class="img-thumbnail" width="40px" :src="imgpreferiti" @click="clickPreferiti">
                    </button>                   
            </div>
            </div>
        </div> 
         <div class="modal" id="myModal" tabindex="-1">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title">Sei sicuro?</h5>
                </div>
                <div class="modal-body">
                <p>Sei sicuro di voler eliminare il codice <b>{{titolo}}</b>?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annulla</button>
                <router-link to="/">
                    <button type="button" class="btn btn-danger btn-primary" data-bs-dismiss="modal" @click="elimina">Elimina</button>
                </router-link>
                </div>
            </div>
            </div>
        </div>   
    </div>

</template>

<script>
    import VueQrCode from 'vue-weblineindia-qrcode'
    import { switchPreferiti, removeFromLocalStorage } from '../../public/localStorage.js'
    export default {
    name: 'visualizza',
    props: {
        imglogo: String,
        titolo: String,
        imgtipo: String,
        imgpreferiti: String,
        descrizione: String,
        isBookmarked: Boolean,
        tag: String,
        tipo: String,
        contenuto: String,
    },
    components: {
        VueQrCode
    },
    methods: {
        clickPreferiti() {
            console.log(this.titolo)
            switchPreferiti(this.titolo)
        },
        elimina(){
            removeFromLocalStorage(this.titolo)
        }
     }
    }
    // Get the modal
    var modal = document.getElementById("myModal");
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
</script>