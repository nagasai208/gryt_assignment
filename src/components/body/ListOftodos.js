import React, { useState } from 'react';
import data from '../../fixtures/todos.json'
import { TodoHeading, CreateButton, TodoInput, EachTodo } from './styledComponents';
function ListOfTodos() {
    let [todos] = useState(data)
    let [todoData, setdata] = useState('');
    let [creatItem, setCreate] = useState(false)


    let setTodo = (event) => {
        event.preventDefault()
        todos.unshift({ todoId: todoData, todoContent: todoData, todoDate: "10-05-2020" })
        setdata('')

    }

    return (


        <form onSubmit={setTodo}>


            <TodoHeading>
                <h1>Todo</h1>
                <CreateButton onClick={(e) => setCreate(true)}>+Create</CreateButton>
            </TodoHeading>
            {
                creatItem &&
                <TodoInput value={todoData} onChange={(e) => setdata(e.target.value)} placeholder="todo" />
            }
            <div>
                {

                    todos.map(eachTodo => {
                        if (eachTodo.todoContent === '')

                            return null
                        else {
                            return <EachTodo>
                                <input type="checkbox" />
                                <p>{eachTodo.todoContent}</p>
                            </EachTodo>
                        }

                    })

                }
            </div>
        </form>


    );
}

export default ListOfTodos;