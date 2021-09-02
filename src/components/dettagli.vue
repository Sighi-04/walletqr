    <template>
    <div>            
         <nav class="navbar navbar-light navbar-sticky sticky-top" style="background-color: #EA5D5D;">
        <div class="container-fluid">
          <a class="navbar-brand" href="visualizza.html">
            <img src="./Risorse/Icone/back_arrow.svg" alt="menuButton" width="32" height="32" class="d-inline-block align-text-top">
            Dettagli Codice
          </a>
        </div>
        </nav>
        <div class="container">
            <h3 class="pt-4">Nome</h3>
            <input type="text" placeholder="inserisci un nome.."><br><br>
            <h3>Descrizione (opzionale)</h3>
            <input type="text" placeholder="inserisci una descrizione.." style="width: 80%;"><br>
        </div>
        <div class="container mt-4 pt-4 text-center">
            <img src="risorse/icone/qrcode.svg" width="250px" height="250px">
            <p class="mt-5">Il codice è stato salvato, premi questa icona per scansionarlo nuovamente</p>
            <div class="container mt-5 pt-5">
                <a href="visualizza.html"><button type="button" class="btn btn-success btn-lg">Conferma</button></a>
                <a href="visualizza.html"><button type="button" class="btn btn-danger btn-lg">Annulla</button></a>
            </div>
        </div>
    </div>

    </template>
