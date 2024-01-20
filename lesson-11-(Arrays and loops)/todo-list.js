const todoList = [];

function addTodo(){
  const inputElement = document.querySelector('.js-name-input'); // getting html element input with help of js 
  const name = inputElement.value ; // getting the value of the input element
  
  todoList.push[name];
  
  console.log(todoList);

}