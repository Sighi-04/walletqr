<template>
    <div class="text-center" >         
        <nav class="navbar navbar-light navbar-sticky sticky-top" style="background-color: #EA5D5D;">
            <div class="container text-center">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">Aggiungi nuovo codice</span>
                </div>
            </div>
        </nav>
        <div class="my-4">        
            <div class="container">
                <p>Scansione in corso...</p>
                <StreamBarcodeReader class="pt-5 pb-5-5 mb-3 mt-5"
                    @decode="onDecode">
                </StreamBarcodeReader>
            </div>
            <div class="container my-2">
            <!--<div class=" container alert alert-warning" role="alert">
                Inquadra il codice, <br>
                assicurati che ci siano condizioni di luce buone
            </div>-->
            <div class="alert alert-info" role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                <div>
                
                Assicurati che ci siano condizioni di luce buone
                </div>
            </div>
                <div id="reader" width="600px"></div>
                <router-link to="/"><button type="button" class="btn btn-danger" style="width:70%;">Annulla</button></router-link>
                </div>
        </div>
        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </symbol>
                
    </div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";
    export default {
        components: {
            StreamBarcodeReader
        },
        methods: {
            onDecode (result) {
            console.log(result)
            
        }
}
    }
</script>

<style scoped>

</style>
