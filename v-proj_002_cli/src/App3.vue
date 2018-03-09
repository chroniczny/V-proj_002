<template>
  <div class="container">
    <hr>
    <h1>communication 3</h1>
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <app-new-quote @quoteAdded="newQuote"></app-new-quote> <!-- can also: newQuote($event) but Vue does it for my-->
    <app-quote-grid :quotes="quotes" @quoteDeletedListener="deleteQuoteMethod"></app-quote-grid>
    <!--passing array to QuoteGrid-->
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
      </div>
    </div>
  </div>
</template>

<script>
  import QuoteGrid from './communication3/components/QuoteGrid.vue';
  import NewQuote from './communication3/components/NewQuote.vue';
  import Header from './communication3/components/Header.vue';

  export default {
    data: function () {
      return {
        quotes: [
          'Just a quote to see sth...'
        ],
        maxQuotes: 10
      }
    },
    methods: {
      newQuote(quote) {
        if (this.quotes.length >= this.maxQuotes) {
          return alert('Please delete quote first')
        } else {
          this.quotes.push(quote);
        }
      },
      deleteQuoteMethod(index) {
        this.quotes.splice(index, 1);
      }
    },
    components: {
      appQuoteGrid: QuoteGrid,
      appNewQuote: NewQuote,
      appHeader: Header

    }
  }
</script>

<style>
</style>
