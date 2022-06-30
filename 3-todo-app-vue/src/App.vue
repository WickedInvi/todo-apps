<script setup>
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
import InputForm from './components/InputForm.vue';

let todoArr = [
  { task: 'Learn Vue', done: false },
  { task: 'Learn Angular', done: false },
];
</script>

<template>
  <InputForm :todoArr="todoArr" />
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: top;
  }
  /* 
  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  } */
}
</style>
