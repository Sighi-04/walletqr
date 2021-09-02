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
            <div id="reader" width="300px"></div>
            <div class="container my-2">
                <p>Scansione in corso...</p>
                <div id="reader" width="600px"></div>
                <a href="lista"><button type="button" class="btn btn-danger" style="width:70%;">Annulla</button></a>
            </div>
        </div>
    </div>
</template>



<style scoped>

</style>
