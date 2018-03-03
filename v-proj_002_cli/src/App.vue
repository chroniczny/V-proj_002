<!--GLOBAL COMPONENT-->

<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <servers></servers>
      <app-server-details></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
    </div>
</template>

<script>
  import Header from './components/Shared/Header.vue';
  import Footer from './components/Shared/Footer.vue';
  import Servers from './components/Server/Servers.vue';
  import ServerDetails from './components/Server/ServerDetails.vue';

  export default {
    components: {
      'app-header': Header, // it could be also appHeader : Header
      Servers,
      'app-server-details': ServerDetails,
      'app-footer': Footer
      // also can with EM6:
      // Servers                -> it means: Servers : Servers - by creating 'key' automatically
    },
    data: function () {
      return {
        status: 'CCCCCritical'
      }
    }

  }
</script>

<style>

</style>
