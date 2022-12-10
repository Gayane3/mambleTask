import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Complete from './components/Complete';



function App() {
  const [todos, setTodos] = useState([
   
  ]);
  return (
    <div className="App">
       <Complete todos={todos} onClearCompleted={()=>{
        
      setTodos(todos.filter((todo)=>!todo.isCompleted
      ))
     
    }} />
      <TodoForm onAdd={(text)=>{
        setTodos([
          ...todos,
          {
            id: Math.random(),
            text:text,
            isCompleted: false
          }
        ]);
      }}/>
      
      <TodoList 
      todos={todos}
      onDelete={(todo)=>{
        setTodos(todos.filter((t)=>t.id !== todo.id))
      }
    }
    onChange ={(newTodo)=>{
      setTodos(todos.map((todo)=>{
        if(todo.id === newTodo.id){
          return newTodo;

        }
        return todo
      }))
    }}
    
    />
    </div>
  );
}

export default App;
