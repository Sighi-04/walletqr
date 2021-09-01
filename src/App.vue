<template>
  <div id="app">
    <lista  titolo="Prova" :imglogo="require('./assets/Icone/test_logo.svg')" :imgtipo="require('./assets/Icone/barcode.svg')" :imgpreferiti="require('./assets/Icone/bookmark_fill.svg')"></lista>
  </div>
</template>

<script>
import lista from './components/lista.vue'
export default {
  name: 'App',
  components: {
    lista
  }  
}
</script>
