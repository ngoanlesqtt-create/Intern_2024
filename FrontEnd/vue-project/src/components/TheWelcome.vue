<script setup lang="ts">
import {  reactive,ref, computed, onMounted} from 'vue';
  const hello="vuejs"
  const count=ref(0)
  const obj=reactive({
    title:"vuejs",
    author:"Ngoan"
  })
  const url=""
  const divId="1"
  const isButtonDisabled=true
  const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green'
}
const text=ref("")
const ok=true
const checked=ref(true)
const checkedNames = ref([])
const picked=ref("one")
const selected=ref('')
const selectedOptions = ref('A')
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
const parentMessage = ref('Parent')
const todoList=ref([])

const options = ref([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' }
])
//list-rendering
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
//call API
onMounted(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => todoList.value=json)
})

const todos=ref([{id:1, name:"dog", isComplete:false},{id:2, name:"cat",isComplete:true}])
const numbers = ref([1, 2, 3, 4, 5])

const evenNumbers = computed(() => {
  return numbers.value.filter((n) => n % 2 === 0)
})

const sets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10]
])

function even(numbers:any) {
  return numbers.filter((number:any) => number % 2 === 0)
}
  const increase=()=>{
    count.value++
  }
</script>

<template>
  <p class="red">Hello {{ count }}</p>
  <p>{{ obj.title }}</p>
  <button v-on:click="increase">CLick me</button>
  <img :src="url" />
  <div v-bind="{ id: divId }"></div>
  <div :disabled="isButtonDisabled"></div>
  <div v-bind="objectOfAttrs"></div>
  <div>{{ ok?"yes":"no" }}</div>
  <!-- <div>{{increase()}}</div> -->
  <input v-model="text" placeholder="edit me" />
  <p>Message is: {{ text }}</p>
  <span>Multiline message is:</span>
  <p style="white-space: pre-line;">{{ text }}</p>
  <textarea v-model="text" placeholder="add multiple lines"></textarea>
  <textarea v-model="text"></textarea>
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>
  <div>Checked names: {{ checkedNames }}</div>

<input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
<label for="jack">Jack</label>

<input type="checkbox" id="john" value="John" v-model="checkedNames" />
<label for="john">John</label>

<input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
<label for="mike">Mike</label>

<div>Picked: {{ picked }}</div>

<input type="radio" id="one" value="One" v-model="picked" />
<label for="one">One</label>

<input type="radio" id="two" value="Two" v-model="picked" />
<label for="two">Two</label>

<div>Selected: {{ selected }}</div>

<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>

<div>Selected: {{ selected }}</div>

<select v-model="selected" multiple>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>

<select v-model="selected">
  <option v-for="option in options" :value="option.value">
    {{ option.text }}
  </option>
</select>

<div>Selected: {{ selectedOptions }}</div>

<ul>
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
</li>
</ul>
<ul>
  <li v-for="value in myObject">
    {{ value }}
  </li>
</ul>

<ul>
    <li v-for="(value, key, index) in myObject">
		  {{ index }}. {{ key }}: {{ value }}
		</li>
  </ul>

  <span v-for="n in 10">{{ n }}</span>
  <ul>
  <template v-for="item in items">
    <li>{{ item.message }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
<ul>
  <template v-for="todo in todos">
  <li v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
</template>
</ul>

<ul>
  <template v-for="todo in todos" :key="todo.id">
  <li>{{ todo.name }}</li>
</template>
</ul>
<ul>
  <li v-for="n in evenNumbers">{{ n }}</li>

</ul>
<hr />
<ul v-for="numbers in sets">
  <li v-for="n in even(numbers)">{{ n }}</li>
</ul>
<!-- <ul>
  <template v-for="todo in todoList">
    <li>{{ todo.id }}</li>
    <li>{{ todo.title }}</li>
  </template>
</ul> -->

</template>

<style>
  .red{
    color: red;
  }
</style>
