import { TodoItem } from "./TodoItem"


export const TodoList = ({searchValue,handleDeleteItem,todoList}) => {

    return(

        <ul>
    
        {
        todoList
          .filter(({title})=>title.startsWith(searchValue))
          .map(({id,title })=>
          <TodoItem 
           id={id}
           key={id}
           title={title}
           handleDeleteItem={handleDeleteItem}
          />
          )
        }
      </ul>
    )
}