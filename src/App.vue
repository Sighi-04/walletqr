<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
  mounted() {
      let scriptLocalStorage = document.createElement('script')
      scriptLocalStorage.setAttribute('src', 'localStorage.js')
      document.head.appendChild(scriptLocalStorage)
    }
}
</script>