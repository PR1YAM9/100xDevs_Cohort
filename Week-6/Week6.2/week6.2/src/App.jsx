// import { useEffect, useState } from 'react'
// import axios from 'axios';

// import './App.css'

// function App() {
//   const [todos,setTodos] = useState([]);
//   const [tid,setTid] = useState(1);
//   const [todo,setTodo] = useState([]);

//   useEffect(()=>{
//     axios.get('https://sum-server.100xdevs.com/todos')
//     .then(function(response){
//       setTodos(response.data.todos)
//     });
//   },[])
  
//   useEffect(()=>{
//     if(tid){
//       axios.get(`https://sum-server.100xdevs.com/todo?id=${tid}`)
//       .then(function(response){
//         setTodo(response.data.todo)
//       })
//     }
//   },[tid])

//   const handleChange = (value) =>{
//     setTid(value);
//     // console.log(value)
//   }

//   return(
//     <>
//       {/* {todos.map((todo)=>{
//         return(
//         <div key={todo.id}>
//           <h1>{todo.title}</h1>
//           <h5>{todo.description}</h5>
//         </div>
//       )
//       })} */}
//       {/* <input type="number" onChange={handleChange} name="" id="" /> */}
//       <button onClick={()=>handleChange(1)}>1</button>
//       <button onClick={()=>handleChange(2)}>2</button>
//       <button onClick={()=>handleChange(3)}>3</button>
//       <button onClick={()=>handleChange(4)}>4</button>

//       <h1>{todo.title}</h1>
//       <h2>{todo.description}</h2>
//     </>
//   )
// }

// export default App


import React, { useMemo, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState();

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleNum = (e) => {
    const n = parseInt(e.target.value, 10);
    setVal(isNaN(n) ? 0 : n); // Set val to 0 if the input is not a valid number
  };

  let sum = useMemo(() => {
    console.log("memo c")
    let c = 0;
    for (let i = 0; i <= val; i++) {
      c = c + i;
    }
    return c;
  }, [val]);

  return (
    <>
      <input
        onChange={handleNum}
        placeholder="Enter a digit"
        type="number"
        name=""
        id=""
      />
      <h2>sum is {sum} </h2>
      <button onClick={handleCount}>count: {count}</button>
    </>
  );
};

export default App;
