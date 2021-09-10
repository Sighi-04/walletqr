 //Funzione per leggere il contenuto di localStorage - 
//Se non ci sono codici salvati restituisco null, altrimenti il json ottenuto dalla stringa localstorage
export function readLocalStorage () {
    let response = localStorage.getItem("Codici")
    if (!response || response=="[]") {
         return null
    }
    else {
        let codiciJSON = JSON.parse(response)
        return ordinaCodici(codiciJSON)
    }
}

//Funzione per aggiungere un codice a localStorage
export function addToLocalStorage (elemento) {
    //ottengo i contenuti attuali
    let currentStorage = readLocalStorage()
    if(currentStorage==null) {
        currentStorage = new Array()
    }
    //aggiungo l'elemento ricevuto come parametro1
    currentStorage.push(elemento)
    //converto in stringa il nuovo json e lo salvo su localStorage
    localStorage.setItem("Codici",JSON.stringify(currentStorage))
}

//Funzione per rimuovere un elemento da localStorage, dato il suo indice
export function removeFromLocalStorage(titolo) {
    //ottengo i contenuti correnti
    let currentStorage = readLocalStorage()
    //rimuovo l'elemento con il metodo splice, dopo aver trovato il suo indice con indexOf
    let indice = currentStorage.findIndex(x => x.titolo===titolo)
    currentStorage.splice(indice,1);
    localStorage.setItem("Codici", JSON.stringify(currentStorage))

}

//Funzione per ordinare i codici, mettendo prima quelli preferiti
export function ordinaCodici(json_base){
    let preferiti = []
    let normali = []
    json_base.forEach(codice => {
        if(codice.isBookmarked) {
            preferiti.push(codice)
        }
        else {
            normali.push(codice)
        }
    });
    return preferiti.concat(normali)
}

//Funzione per modificare un elemento esistente
export function modificaCodice(titoloVecchio) {
    let currentStorage = readLocalStorage()
    let indice = currentStorage.findIndex(x => x.titolo===titoloVecchio)  
    currentStorage[indice].titolo = document.getElementById('textTitolo').value
    currentStorage[indice].descrizione = document.getElementById('textDescrizione').value
    localStorage.setItem("Codici", JSON.stringify(currentStorage))
    }

export function switchPreferiti(titolo) {
    let currentStorage = readLocalStorage()
    let iconapreferiti = document.getElementById("preferiti")
    console.log(readLocalStorage())
    let indice = currentStorage.findIndex(x => x.titolo===titolo)
    console.log(currentStorage[indice])
    if(currentStorage[indice].isBookmarked) {
        currentStorage[indice].isBookmarked=false;
        currentStorage[indice].imgpreferiti = "assets/icone/bookmark.svg"
        iconapreferiti.setAttribute("src", currentStorage[indice].imgpreferiti)
    }
    else {
        currentStorage[indice].isBookmarked=true;
        currentStorage[indice].imgpreferiti = "assets/icone/bookmark_fill.svg"
        iconapreferiti.setAttribute("src", currentStorage[indice].imgpreferiti)
    }
    localStorage.setItem("Codici", JSON.stringify(currentStorage))
}

export function caricaDati(titolo, descrizione){
    let boxtitolo = document.getElementById("textTitolo")
    let boxdescrizione = document.getElementById("textDescrizione")
    if(titolo) {
        boxtitolo.value = titolo;
    }
    if(descrizione) {
    boxdescrizione.value = descrizione;
    }
}

//funzione controllo validità titolo
export function controllaDisponibilitaTitolo(titolo) {
    let currentStorage = readLocalStorage()
    let disponibile = true;
    if(titolo=="") {
        disponibile = false;
    }
    else {
        if(currentStorage!=null) {
            currentStorage.forEach(codice=>{
                if(codice.titolo==titolo) {
                    disponibile = false
                }
            })
        }
    }
    return disponibile
}

//Funzione per lo switch tra light mode e dark mode


export function switchTheme(){
    let iconamenu = document.getElementById('bkIcon')
    let iconavuoto = document.getElementById('emptyIcon')
    let menu = document.getElementById('offcanvasExample')
    if(document.body.style.backgroundColor==''){
        localStorage.setItem('theme', 'dark')
        iconamenu.style.filter='invert(100%) sepia(0%) saturate(15%) hue-rotate(280deg) brightness(104%) contrast(104%)'
        iconavuoto.style.filter='invert(100%) sepia(0%) saturate(15%) hue-rotate(280deg) brightness(104%) contrast(104%)'
        menu.style.backgroundColor = 'black'
        menu.style.color='white'
        document.body.style.backgroundColor='black'
        document.body.style.color='white'
        document.getElementById('bkLabel').style.color='white'
    }
    else {
        localStorage.setItem('theme', 'light')
        iconavuoto.style.filter = 'invert(0%) sepia(99%) saturate(0%) hue-rotate(352deg) brightness(96%) contrast(100%)'
        iconamenu.style.filter = 'invert(0%) sepia(99%) saturate(0%) hue-rotate(352deg) brightness(96%) contrast(100%)'
        localStorage.setItem('theme', 'light')
        document.body.style.backgroundColor=''
        document.body.style.color='black'
        menu.style.backgroundColor = 'white'
        menu.style.color='black'
        document.getElementById('bkLabel').style.color='black'

    }
}

export function loadTheme(){
    let iconamenu = document.getElementById('bkIcon')
    let iconavuoto = document.getElementById('emptyIcon')
    let menu = document.getElementById('offcanvasExample')
    if(localStorage.getItem('theme')=='dark') {
        iconamenu.style.filter='invert(100%) sepia(0%) saturate(15%) hue-rotate(280deg) brightness(104%) contrast(104%)'
        iconavuoto.style.filter='invert(100%) sepia(0%) saturate(15%) hue-rotate(280deg) brightness(104%) contrast(104%)'
        menu.style.backgroundColor = 'black'
        menu.style.color='white'
        document.body.style.backgroundColor='black'
        document.body.style.color='white'
        document.getElementById('bkLabel').style.color='white'
    }
    else {
        iconavuoto.style.filter = 'invert(0%) sepia(99%) saturate(0%) hue-rotate(352deg) brightness(96%) contrast(100%)'
        iconamenu.style.filter = 'invert(0%) sepia(99%) saturate(0%) hue-rotate(352deg) brightness(96%) contrast(100%)'
        localStorage.setItem('theme', 'light')
        document.body.style.backgroundColor=''
        document.body.style.color='black'
        menu.style.backgroundColor = 'white'
        menu.style.color='black'
        document.getElementById('bkLabel').style.color='black'
    }
}