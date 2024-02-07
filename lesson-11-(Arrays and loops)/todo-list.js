const todoList = [
  {name :'Reading book',
   dueDate : '2023-12-15'   
  },
  {name :'Marathon',
  dueDate : '2024-01-05'   
 }
];

rendertodoList();

function rendertodoList(){

  let todoListHTML ='';

  // generating the HTML through JS
  for(let i=0;i<todoList.length;i++){
    const todoObject = todoList[i];

    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    //  Use destructing (if variable and object property name is same)
    
    const {name ,dueDate} = todoObject;

    const html = `
      <div> ${name}</div>
      <div>${dueDate} </div>
        
      <button class="delete-todo-button" onClick ="
        todoList.splice(${i},1);
        rendertodoList();
      ">Delete</button>
      `;
    todoListHTML += html;   

  }
  // console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML = todoListHTML ;
}

function addTodo(){

  const inputElement = document.querySelector('.js-name-input'); // this get input element and put it inside javascript 
  const name = inputElement.value ; // getting the value of the input element i.e text 
  
  const dateElement = document.querySelector('.js-dueDate');
  const dueDate = dateElement.value;

  todoList.push({
    // name : name,
    // dueDate : dueDate,
    name,
    dueDate
  });  
  // console.log(todoList);

  inputElement.value = ""; // this will make input text empty agin 
  rendertodoList();
}