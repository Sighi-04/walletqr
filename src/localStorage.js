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
