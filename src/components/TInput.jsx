const TInput = (props) => {
    const{todo,setTodo} = props
    return (
        <>
            <input type="text" value={todo}
            onChange={(e) =>{
                setTodo(e.target.value)
            }}
            />
        </>
    );
};

export default TInput;