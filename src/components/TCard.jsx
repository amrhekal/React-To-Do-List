
const TCard = (props) => {
    const{children,deleteTodo,index,editTodo} =props
    return (
        <li>
            {children}
            <div className="">
                <button onClick={()=>{
                    editTodo(index)
                }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={()=>{deleteTodo(index)}}>
                    <i className="fa-solid fa-trash"></i></button>
            </div>
        </li>
    );
};

export default TCard;