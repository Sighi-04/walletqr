<template>
    <div>            
        <nav class="navbar navbar-light" style="background-color: #EA5D5D;">
            <div class="container-fluid">
                <router-link :to="{name: caller, params: {titolo: titolo, descrizione: descrizione, contenuto: contenuto, tipo: tipo, imgpreferiti: imgpreferiti,isBookmarked: isBookmarked}}">
                    <a class="navbar-brand">
                        <img src="assets/Icone/back_arrow.svg" alt="indietro" width="34" height="34">
                    </a>                
                </router-link>
                <div class="text-center">
                    <span class="navbar-brand mb-0 h1">Dettagli codice</span>
                </div>
            </div>
        </nav>
        <div class="container text-center my-4">
            <div class="form-floating">
                <textarea class="form-control" id="textTitolo"></textarea>
                <label for="textTitolo">Nome</label>
            </div><br>
            <div class="form-floating">
                <textarea class="form-control" id="textDescrizione" style="height: 100px"></textarea>
                <label for="textDescrizione">Descrizione (opzionale)</label>
            </div>
            <br>
        </div>
        <div class="container mt-4 pt-4 text-center">
            <div class="container my-4">
                <div class="container my-4">
                    <router-link :to="{ name: 'scansione', params: { caller: 'dettagli', action: action, titolo: titolo, descrizione: descrizione, contenuto: contenuto}}">
                        <button type="button" style="width:70%" class="btn btn-outline-primary my-5"><img src="assets/Icone/qr_code_scanner_black_24dp.svg"><span> Scansiona nuovamente</span></button>
                    </router-link>
                </div>
                <div class="container my-4 pt-4">
                        <button type="button" style="width:70%" @click="salva" class="btn btn-success btn-lg">Conferma</button>
                </div>            
            </div>
        </div>
    </div>
</template>
<script>
    import { addToLocalStorage, caricaDati, modificaCodice, controllaDisponibilitaTitolo} from '../../public/localStorage.js'
    export default {
        props: {
            titolo: String,
            imgtipo: String,
            imgpreferiti: String,
            descrizione: String,
            isBookmarked: Boolean,
            tipo: String,
            contenuto: String,
            caller: String,
            action: String
        },
        mounted(){
            caricaDati(this.titolo, this.descrizione)
        },
        methods: {
            salva() {
                if(this.action=='modifica') {
                    modificaCodice(this.titolo)
                    this.$router.push({name: 'visualizza', params: {titolo: document.getElementById('textTitolo').value, descrizione: document.getElementById('textDescrizione').value, imgpreferiti: 'assets/icone/bookmark.svg',isBookmarked: this.isBookmarked, contenuto: this.contenuto}})
                }
                else {
                    if(controllaDisponibilitaTitolo(document.getElementById('textTitolo').value)){
                    if(this.caller=='scansione'){
                    let elemento = {
                        "imglogo": 'assets/icone/test_logo.svg', 
                        "titolo": document.getElementById('textTitolo').value,
                        "imgtipo": 'assets/icone/qrcode.svg',
                        "imgpreferiti": 'assets/ione/bookmark.svg',
                        "descrizione": document.getElementById('textDescrizione').value,
                        "isBookmarked": false,
                        "tag": null,
                        "tipo": this.tipo,
                        "contenuto": this.contenuto
                    }
                    addToLocalStorage(elemento)
                }
                this.$router.push({name: 'visualizza', params: {titolo: document.getElementById('textTitolo').value, descrizione: document.getElementById('textDescrizione').value, imgpreferiti: 'assets/icone/bookmark.svg',isBookmarked: this.isBookmarked, contenuto: this.contenuto}})
                }
                }
                
            } 
        }
    }
</script>