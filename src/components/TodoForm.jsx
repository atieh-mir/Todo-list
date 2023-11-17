


export const TodoForm = ({handleOnSubmitForm, handleValue,value,handleSearchValue}) => {



    return(
       
        <form onSubmit={handleOnSubmitForm} >
             <h1>Todo List</h1>
          <input  placeholder='Add your plan ...' onChange={handleValue}  value={value}/>
          <button type='submit' >Add</button>
          <div>  <input placeholder='Search' onChange={handleSearchValue}/>
    </div>
        </form>
    )
} 