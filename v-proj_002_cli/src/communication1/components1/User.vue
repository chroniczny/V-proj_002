<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change my name</button>
    <p>Name is now: {{ name }}</p>
    <p>Age of parent {{ age }}</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail :myName="name"
                         @nameWasReset="name = $event"
                         @resetFn="resetName"
                         :userAge="age"></app-user-detail> <!-- set data 'age' to display-->
        <!--:myName to make it dynamic, created property in props and bind into it -->
        <!-- @nameWasReset use emited custom event to communicate child with parent -->
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="age"
        @ageWasEdited="age = $event"></app-user-edit>
        <!-- set data 'age' to display and also watch an event for changes here-->
      </div>
    </div>
  </div>
</template>

<script>
  import { eventBus } from '../../main'; // should exist from the beginning
  import UserDetail from './UserDetail.vue';
  import UserEdit from './UserEdit.vue';

  export default {
    data: function () {
      return {
        name: 'Jakub',
        age: 27
      };
    },
    methods: {
      changeName() {
        this.name = "Max";
      },
      resetName() {
        this.name = 'Jakub again from Parent';
      }
    },
    components: {
      appUserDetail: UserDetail,
      appUserEdit: UserEdit
    }
  }
</script>

<style scoped>
  div {
    background-color: lightblue;
  }
</style>
