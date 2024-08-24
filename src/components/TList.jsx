import TCard from "./TCard.jsx";

const TList = (props) => {
    const {todos,deleteTodo,editTodo} = props
    return (
        <ul>
            {todos.map((todo,index)=>{
                return(
                    <TCard key={index}
                    deleteTodo={deleteTodo} index={index} editTodo={editTodo}>{todo}</TCard>
                )
            })}
        </ul>
    );
};

export default TList;