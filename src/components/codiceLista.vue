<template>
     <router-link style="text-decoration:none;color:black;" :to="{ name: 'visualizza', params: { titolo: titolo, descrizione: descrizione, imgpreferiti: imgpreferiti, contenuto: contenuto, imgpreferiti: imgpreferiti }}">
                <div class="row py-3">
                    <div class="col-2">
                        <img :src="imglogo" :alt="imglogo" width="24px" height="24px">
                    </div>
                    <div class="col-6">
                        {{titolo}}
                    </div>
                    <div class="col-2">
                        <img :src="imgtipo" width="24px" height="24px">
                    </div>
                    <div class="col-2">
                        <img :src="imgpreferiti" width="24px" height="24px">
                    </div>
                </div>
        <hr class="my-0">
     </router-link>
     
</template>

<script>
export default {
    name: 'codiceLista',
    props: {
        imglogo: String,
        titolo: String,
        imgtipo: String,
        imgpreferiti: String,
        descrizione: String,
        isBookmarked: Boolean,
        tag: String,
        tipo: String,
        contenuto: String
    }
}
</script>