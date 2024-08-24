import TInput from "./TInput.jsx";
import TList from "./TList.jsx";
import {useEffect, useState} from "react";

const MainToDoList = () => {
    const [todo,setTodo] = useState('')
    const [todos,setTodos] = useState([])

    function addToLocal(todos){
        const localtodos = JSON.stringify(todos)
        localStorage.setItem('todos',localtodos)
    }

    function addTodo(todo) {
        const newtodos = [...todos,todo]
        setTodos(newtodos)
        setTodo('')
        addToLocal(newtodos)
    }
    function deleteTodo(todoindex) {
        const newTodo = todos.filter((todo,index)=>{
            return index !== todoindex;
        })
        setTodos(newTodo)
        addToLocal(newTodo)
    }
    function editTodo(index) {
        const editTodo = todos[index]
        setTodo(editTodo)
        deleteTodo(index)
    }


    useEffect(() => {
        let localtodos = localStorage.getItem('todos')
        if (localtodos){
            localtodos = JSON.parse(localtodos)
            setTodos(localtodos)
        }
    }, []);

    return (
        <main>
            <h1>To Do List</h1>
            <TInput todo={todo} setTodo={setTodo}></TInput>
            <button onClick={() => {addTodo(todo)}}>Add</button>
            <TList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}></TList>
        </main>
    );
};

export default MainToDoList;