import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TodoList = () => {
   const [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
   const [newTask, setNewTask] = useState("");

   const addTask = () => {
      setTodos((prevTodos) => [
         ...prevTodos,
         { task: newTask, id: uuidv4() }
      ]);
      setNewTask("");
   };

   const todelete = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
   };

   const upperCase = () => {
      setTodos(todos.map((todo) => ({
         ...todo,
         task: todo.task.toUpperCase()
      })));
   };

   const upperCaseOne=(id)=>{
      setTodos((todos)=>
         todos.map((todo)=>{
           if(todo.id==id){
            return{
               ...todo,
               task: todo.task.toUpperCase(),
            }
           }else{
              return todo; 
           }
         })
      )
   }

   

   return (
      <div>
         <input 
            type="text" 
            placeholder="Enter task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
         /> 
         <button onClick={addTask}>Add</button>
         <br />
         <br />
         <h3>Tasks Todo</h3>
         <ul>
            {todos.map((todo) => (
               <li key={todo.id}>
                  <span>{todo.task}</span>
                  <button onClick={() => todelete(todo.id)}>Delete</button>
                  <button onClick={() => upperCaseOne(todo.id)}>uppercaseone</button>
                  
               </li>
            ))}
         </ul>
         <button onClick={upperCase}>UpperCase All</button>  
      </div>
   );
};
