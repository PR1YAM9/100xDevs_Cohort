import { useEffect, useState } from 'react'
import axios from 'axios'

// useTodos Custom Hook 

// const useTodos = () =>{
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(()=>{
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then((res)=>{
//           setTodos(res.data.todos)
//           setLoading(false)
//       })
//   },[])

//   return {todos, loading};

// }

const useTodos=(n)=>{
  const [todos, setTodos] = useState([]);
  const todosfetch = ()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
      .then((res)=>{
          setTodos(res.data.todos)
      })
    }
    
    useEffect(()=>{
      setInterval(() => {
        todosfetch();
      }, n *1000);
      todosfetch()
    },[n])
    
    return todos;
}


function App() {
  // const todos = useTodos(5);

  return (
    <>
      {todos.map(todo => <Track key={todo.id} todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App