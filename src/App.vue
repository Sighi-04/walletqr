<template>
  <div id="app">
    <prova></prova>
    <router-view></router-view>
  </div>
</template>

<script>
    import prova from './components/prova.vue'
    //import scansione from './components/scansione.vue'

    export default{
      components:{
        'prova':prova,
      }
    }
</script>

