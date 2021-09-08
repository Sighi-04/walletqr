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
    console.log("addlocalstoragefunzionepazza")
    //ottengo i contenuti attuali
    let currentStorage = readLocalStorage()
    if(currentStorage==null) {
        currentStorage = new Array()
    }
    if(controllaDisponibilitaTitolo(elemento.titolo)) {
        //aggiungo l'elemento ricevuto come parametro1
        currentStorage.push(elemento)
        //converto in stringa il nuovo json e lo salvo su localStorage
        localStorage.setItem("Codici",JSON.stringify(currentStorage))
    }
    else {
        alert("Titolo già in uso")
    }
    
    
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
    console.log(titoloVecchio)
    
    let currentStorage = readLocalStorage()
    let indice = currentStorage.findIndex(x => x.titolo===titoloVecchio)  
    if(controllaDisponibilitaTitolo(document.getElementById('textTitolo').value)) {
        currentStorage[indice].titolo = document.getElementById('textTitolo').value
        currentStorage[indice].descrizione = document.getElementById('textDescrizione').value
        localStorage.setItem("Codici", JSON.stringify(currentStorage))
        }
    else {
        alert("Titolo già in uso")
    }  
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

//dati di prova
/*
let provaa = [
    {
        "imglogo": "assets/Icone/tag_black_24dp.svg", 
        "titolo": "titolo prova 1",
        "imgtipo": "assets/icone/qrcode.svg",
        "imgpreferiti": "assets/icone/bookmark_fill.svg",
        "descrizione": "descrizione codice 1",
        "isBookmarked": true,
        "tag": null,
        "tipo": "QR",
        "contenuto": "contenuto di prova 1"
    },
    {
        "imglogo":  "assets/Icone/tag_black_24dp.svg", 
        "titolo": "titolo prova 2",
        "imgtipo": "assets/icone/qrcode.svg",
        "imgpreferiti": "assets/icone/bookmark.svg",
        "descrizione": "descrizione codice 2",
        "isBookmarked": false,
        "tag": null,
        "tipo": "QR",
        "contenuto": "contenuto di prova 2"
    },
    {
        "imglogo": "assets/Icone/tag_black_24dp.svg", 
        "titolo": "titolo prova 3",
        "imgtipo": "assets/icone/barcode.svg",
        "imgpreferiti": "assets/icone/bookmark_fill.svg",
        "descrizione": "descrizione codice 3",
        "isBookmarked": true,
        "tag": null,
        "tipo": "QR",
        "contenuto": "contenuto di prova 3"
    },
    {
        "imglogo": "assets/Icone/tag_black_24dp.svg", 
        "titolo": "titolo prova 4",
        "imgtipo": "assets/icone/barcode.svg",
        "imgpreferiti": "assets/icone/bookmark.svg",
        "descrizione": "descrizione codice 4",
        "isBookmarked": false,
        "tag": null,
        "tipo": "QR",
        "contenuto": "contenuto di prova 4"
    }
]

localStorage.setItem("Codici", JSON.stringify(provaa))
*/


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
    if(currentStorage!=null) {
        currentStorage.forEach(codice=>{
            if(codice.titolo==titolo) {
                return false
            }
        })
    }
    return true
}