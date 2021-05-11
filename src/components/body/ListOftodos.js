import React, { useState } from 'react';
import data from '../../fixtures/todos.json'
function ListOfTodos() {
    let [todos, setTodos] = useState(data)
    let [todoData, setdata] = useState('');
    let [creatItem,setCreate]=useState(false)


    let setTodo = (event) => {
        event.preventDefault()
        todos.unshift({ todoId: 1, todoContent: todoData, todoDate: new Date })
        setdata('')
        
    }

    return (

        <div>
            <form onSubmit={setTodo}>
                { creatItem &&
                    <input value={todoData} onChange={(e) => setdata(e.target.value)} />
                }
                <h1>Todo</h1>
                <button onClick={(e) => setCreate(true)}>+Create</button>
                {

                    todos.map(eachTodo => {
                        return <div>
                            <input type="checkbox"/>
                            <p>{eachTodo.todoContent}</p>
                        </div>
                    })

                }
            </form>

        </div>
    );
}

export default ListOfTodos;