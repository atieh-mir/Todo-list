


export const TodoItem = ({id,title, handleDeleteItem}) => {

    return(

        <div key={id}>
           <li  
            > <input type='checkbox' />{title}<button  onClick={()=>handleDeleteItem(id)}
            
            >delete</button>
          </li>
          </div>
    )
}