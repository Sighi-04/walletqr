<template>
    <div>            
        <nav class="navbar navbar-light" style="background-color: #EA5D5D;">
            <div class="container-fluid">
                <router-link :to="{name: caller, params: {titolo: titolo, descrizione: descrizione, contenuto: contenuto, tipo: tipo, imgpreferiti: imgpreferiti}}">
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
                <label for="floatingTextarea">Nome</label>
            </div><br>
            <div class="form-floating">
                <textarea class="form-control" id="textDescrizione" style="height: 100px"></textarea>
                <label for="floatingTextarea2">Descrizione (opzionale)</label>
            </div>
            <br>
        </div>
        <div class="container mt-4 pt-4 text-center">
            <router-link :to="{ name: 'scansione', params: { caller: 'dettagli'}}">
                <button type="button" class="btn btn-info">Scansiona nuovamente</button>
                </router-link>
            <div class="container mt-3 pt-3">
                <div class="container m-1"><router-link to="/visualizza"><button type="button" style="width:70%" class="btn btn-success btn-lg">Conferma</button></router-link></div>            
            </div>
        </div>
    </div>
</template>
<script>
    import { addToLocalStorage, caricaDati, modificaCodice} from '../../public/localStorage.js'
    export default {
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
            caller: String
        },
        mounted(){
            caricaDati(this.titolo, this.descrizione)
        },
        methods: {
            salva() {
                if(this.caller=='scansione'){
                    let elemento = {
                        "imglogo": 'assets/icone/test_logo.svg', 
                        "titolo": document.getElementById('textTitolo').value,
                        "imgtipo": 'assets/icone/qrcode.svg',
                        "imgpreferiti": 'assets/ione/bookmark.svg',
                        "descrizione": document.getElementById('textDescrizione').value,
                        "isBookmarked": false,
                        "tag": null,
                        "tipo": null,
                        "contenuto": this.contenuto
                    }
                    addToLocalStorage(elemento)
                }
                else {
                    modificaCodice(this.titolo)
                }
            }
        }
    }
</script>