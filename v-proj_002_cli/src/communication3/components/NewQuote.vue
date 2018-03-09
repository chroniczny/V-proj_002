<template>
  <div class="row">
    <form action="">
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-offset-3 form-group">
        <label >Quote</label>
        <textarea class="form-control" name="" id="" cols="30" rows="3" v-model="quote"></textarea>
        <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
      data: function() {
          return {
              quote: ""
          };
      },
    methods: {
          createNew() {
              this.$emit('quoteAdded', this.quote); // pass this.quote
              this.quote = ''; // reset quote for new arrivals
          }
    }
//    name: "QuoteGrid",
  }
</script>

<style>

</style>
