<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>User Age {{ userAge }}</p>
    <p>Edit me!</p>
    <button @click="editAge">Edit age</button>
  </div>
</template>

<script>
  import {eventBus} from '../../main'; // should exist from the beginning

  export default {
    props: ['userAge'],
    methods: {
      editAge() {
        this.userAge = 30;
//        this.$emit('ageWasEdited', this.userAge);
//        eventBus.$emit('ageWasEdited', this.userAge); // event in this separate instance eventBus
        eventBus.changeAge(this.userAge); // when its in eventBus method
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightgreen;
  }
</style>
