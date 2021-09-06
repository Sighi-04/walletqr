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
            <p>Inquadra il codice, <br>
            assicurati che ci siano condizioni di luce buone</p>
           <StreamBarcodeReader class="pt-5 pb-5-5 mb-3 mt-5"
            @decode="onDecode">
            </StreamBarcodeReader>
            <div class="container my-2">
                <p>Scansione in corso...</p>
                <div id="reader" width="600px"></div>
                <router-link to="/"><button type="button" class="btn btn-danger" style="width:70%;">Annulla</button></router-link>
            </div>
        </div>
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
