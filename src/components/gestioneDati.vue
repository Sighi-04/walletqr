<template>
     <div class="container">
           <nav class="navbar navbar-light" style="background-color: #EA5D5D;">
            <div class="container-fluid">
                <router-link to="/">
                    <img src="assets/icone/back_arrow.svg" alt="indietro" width="34" height="34">
                </router-link>
                <div class="text-center">
                    <span class="navbar-brand mb-0 h1">Gestione dati</span>
                </div>
            </div>
    </nav>
        <h2>Salva i dati</h2>
            <button type="button" class="btn btn-primary" @click="copia">Premi per copiare i dati</button>
        <hr>
        <h2>Ripristina un backup</h2>
        <input placeholder="incolla qui un backup" id="textRipristina">
        <button class="btn btn-success" @click="salva">Carica</button>
        <hr>
        <h2>Elimina tutti i dati</h2>
        <button type="button" class="btn btn-danger" @click="elimina">Elimina tutti i dati</button>
     </div>

</template>


<script>
export default ({
    methods: {
        copia(){
            var text = localStorage.getItem('Codici');
            navigator.clipboard.writeText(text)
            alert("Dati copiati")
        },
        salva() {
            let backup = document.getElementById('textRipristina').value
            if(backup!="" && backup!=null) {
                localStorage.setItem('Codici', backup)
            }
            else {
                alert("Incolla un backup valido")
            }

        },
        elimina(){
            if(confirm("Vuoi eliminare tutti i dati salvati? L'operazione è irreversibile")) {
                localStorage.removeItem("Codici")
            }
        }
    }
})
</script>
