


export default function TodoList(){
          let todos = [
            'go to the gym',
            'eat more fruits and vegetables',
            'Pick up the kids from school'
          ]
    return(
        <ul className="main">
            {todos.map((todo,todoIndex) => {
                return(
                    <li className="todoItem" key={todoIndex}>{todo}</li>
                )
            })}
        </ul>
        
    )
}