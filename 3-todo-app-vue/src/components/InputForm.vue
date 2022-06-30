<script setup>
const props = defineProps({
  todoArr: {
    type: [Array, Object],
    required: true,
  },
});

const submitHandler = (e) => {
  // e.preventDefault();
  // props.todoArr.forEach((todo) => {
  //   console.log(todo.task);
  // });
  // console.log(props.todoArr);
  console.log(taskInput.value);
};
</script>

<template>
  <div>
    <form @submit.prevent="">
      <input
        type="text"
        name="taskInput"
        id="taskInput"
        placeholder="Add a task here"
        value="test"
      />
      <button>Add task</button>
    </form>
    <ul>
      <li
        @click="submitHandler"
        v-for="todo in todoArr"
        :key="todo.task"
      >
        {{ todo.task }}
      </li>
    </ul>
  </div>
</template>
