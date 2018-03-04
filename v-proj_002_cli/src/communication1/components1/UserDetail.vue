<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User name {{ switchName() }}</p> <!--to validate type of that -->
    <p>User Age {{ userAge }}</p> <!--to validate type of that -->
    <button @click="resetName">Reset Name by custom event</button>
    <button @click="resetFn()">Reset Name by props from parent</button>

  </div>
</template>

<script>
  import {eventBus} from '../../main'; // should exist from the beginning

  export default {
//      props: ['myName'],   // visible from outside FROM THEIR PARENT; the same as used above,
    // it creates new property "name"
    props: { // type control!!!!!!
      myName: {
        type: String  // also can be: [String, Array]
        // default: 'Max' // also wanna use such a thing
//        required: true, // make sure that it will always be passed to use this component
      },
      resetFn: Function,
      userAge: Number
    },
    methods: {
      switchName() {
        return this.myName.split("").reverse().join("");
      },
      resetName() {
        this.myName = 'Jakub';
        this.$emit('nameWasReset', this.myName);
        // register CUSTOM EVENT by name "nameWasReset"
      }
    },
    created() { // jsHook to create a listener to this event
      eventBus.$on('ageWasEdited', (age) => {
          this.userAge = age;
      }); // this will listen of events in it

    }
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
