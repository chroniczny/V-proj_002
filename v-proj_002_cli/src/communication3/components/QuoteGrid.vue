<template>
  <div class="row">
    <app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">{{ quote }}</app-quote>
  </div>
</template>

<script>
  import Quote from './Quote.vue'
  export default {
//    name: "QuoteGrid",
    props: ['quotes'],
    components: {
      appQuote: Quote
    },
    methods: {
        deleteQuote(index) {
            // which quote?????? I need an indx of that quote!
            this.$emit('quoteDeletedListener', index);
        }
    },
  }
</script>

<style>

</style>
