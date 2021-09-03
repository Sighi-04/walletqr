//Funzione per leggere il contenuto di localStorage - 
//Se non ci sono codici salvati restituisco null, altrimenti il json ottenuto dalla stringa localstorage
function readLocalStorage () {
    let response = localStorage.getItem("Codici")
    if (!response) {
         return null
    }
    else {
        let codiciJSON = JSON.parse(response)
        return ordinaCodici(codiciJSON)
    }
}

//Funzione per aggiungere un codice a localStorage
function addToLocalStorage (elemento) {
    //ottengo i contenuti attuali
    let currentStorage = readLocalStorage()
    //aggiungo l'elemento ricevuto come parametro
    currentStorage.push(elemento)
    //converto in stringa il nuovo json e lo salvo su localStorage
    localStorage.setItem("Codici",JSON.stringify(currentStorage))
}

//Funzione per rimuovere un elemento da localStorage, dato il suo indice
function removeFromLocalStorage(elemento) {
    //ottengo i contenuti correnti
    let currentStorage = readLocalStorage()
    //rimuovo l'elemento con il metodo splice, dopo aver trovato il suo indice con indexOf
    currentStorage.splice(currentStorage.indexOf(elemento),1)

}

//Funzione per ordinare i codici, mettendo prima quelli preferiti
function ordinaCodici(json_base){
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
function modificaCodice(vecchio, nuovo) {
    let currentStorage = readLocalStorage()
    let indice = indexOf(vecchio)
    currentStorage[indice]=nuovo
    localStorage.setItem("Codici", currentStorage)
}
