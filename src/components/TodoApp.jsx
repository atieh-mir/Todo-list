import { TodoForm , TodoList} from '../components'

 import { useState } from 'react';
 import { useLocalStorage } from '../hooks/useLocalStorage';
const TodoApp =() => {

  const [value, setValue] = useState('');
const[defaultList, { set }] = useLocalStorage('todos');
  const [todoList, setTodoList] = useState( defaultList || []  ) 
  const [searchValue, setSearchValue] = useState('');
 
  const handleValue = ({target}) =>{
    setValue(target.value)
  }
const handleOnSubmitForm = (e) => {
   e.preventDefault()
   const id = Math.floor(Math.random() * 100000) + 1
   if(value.trim()){
      
     const newTodoItem = {
       id: id,
       title:value,
       done:false
     }
    const newTodos= [...todoList, newTodoItem]
    setTodoList(newTodos)
    set('todos', newTodos)
    setValue('')
    }else{
      alert("Please enter your plan...")
     }
   
   }
   const handleSearchValue = ({target}) =>{
     setSearchValue(target.value)
  }
   const handleDeleteItem = (id ) =>{

     const newList = todoList.filter((list)=> list.id !== id)
     set('todos', newList)
     setTodoList(newList)
   
   }
  return(
<div className='form--container'>
   <TodoForm
   handleOnSubmitForm={handleOnSubmitForm}
   handleValue={handleValue}
   value={value}
   handleSearchValue={handleSearchValue}
   
   
   />

   <TodoList
   searchValue={searchValue}
   handleDeleteItem={handleDeleteItem}
   todoList={todoList}
   />
  </div>

  )
}

export default TodoApp;