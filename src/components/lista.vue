<template>
     <div>
         <codiceLista :titolo="titolo" :imglogo="imglogo" :imgtipo="imgtipo" :imgpreferiti="imgpreferiti"></codiceLista>
     </div>
</template>

<script>
import codiceLista from './codiceLista.vue'
    export default {
    name: 'lista',
    components: {
        codiceLista
     },
     props: ['imglogo', 'titolo', 'imgtipo', 'imgpreferiti', 'descrizione', 'isBookmarked', 'tag', 'tipo', 'contenuto']
    }
</script>

