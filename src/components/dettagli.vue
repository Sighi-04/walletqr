    <template>
    <div>            
        <nav class="navbar navbar-light" style="background-color: #EA5D5D;">
            <div class="container-fluid">
                <router-link to="/">
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
                <textarea class="form-control" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Nome</label>
            </div><br>
            <div class="form-floating">
                <textarea class="form-control" id="floatingTextarea2" style="height: 100px"></textarea>
                <label for="floatingTextarea2">Descrizione (opzionale)</label>
            </div>
            <br>
        </div>
        <div class="container mt-4 pt-4 text-center">
            <router-link to="/scansione"><img class="img-thumbnail shadow p-3 mb-5 bg-body rounded" src="assets/Icone/qrcode.svg" width="250px" height="250px"></router-link>
            <p class="mt-5">Il codice è stato salvato, premi questa icona per scansionarlo nuovamente</p>
            <div class="container mt-3 pt-3">
                <div class="container m-1"><router-link to="/visualizza"><button type="button" style="width:70%" class="btn btn-success btn-lg ">Conferma</button></router-link></div>            
            </div>
        </div>
    </div>

    </template>
