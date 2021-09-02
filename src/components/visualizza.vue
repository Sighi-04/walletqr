<template>
<div>
    <nav class="navbar navbar-light" style="background-color: #EA5D5D;">
            <div class="container-fluid">
                <a class="navbar-brand" href="lista">
                    <img src="assets/Icone/back_arrow.svg" alt="indietro" width="24" height="24">
                </a>
                <div class="text-center">
                    <span class="navbar-brand mb-0 h1">Titolo codice</span>
                </div>
            </div>
        </nav>
        <div class="container my-4">
                <figure class="figure">
                    <figcaption class="figure-caption"><h3>Descrizione</h3><br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam doloremque necessitatibus consequuntur explicabo eaque, odit tenetur qui expedita ad sequi maxime, eius nulla enim. Officia pariatur ad magni minus non. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi ab vero consectetur? Atque iure, aliquam ullam quas consequuntur repudiandae ex minus, maiores culpa, officiis neque asperiores tempore saepe aut.</figcaption>
                  </figure>
                <div class="text-center">
                    <img src="assets/icone/qrcode.svg" style="width: 150px;" class="rounded img-fluid " alt="qrcode">
                </div>
        </div>
        <div class="container text-center my-5">
            <div class="row">
              <div class="col"><a href="#"><img class="img-thumbnail" src="assets/Icone/delete_icon.svg" alt="delete"></a></div>
              <div class="col"><a href="dettagli.html"><img class="img-thumbnail" src="assets/Icone/edit_icon.svg" alt="edit"></a></div>
              <div class="col"><a href="#"><img class="img-thumbnail" src="assets/Icone/bookmark.svg" alt="bookmarks"></a></div>
            </div>
        </div>    
    </div>
        
</template>

<script>
    export default {
    name: 'visualizza',
    }
</script>