// Todo

// import React, { useState } from 'react';

// const initialTodo = [
//   {
//     id: 1,
//     title: 'GYm',
//     desc: 'go to \gym',
//   },
//   {
//     id: 2, 
//     title: 'Swim',
//     desc: 'go swimming',
//   },
//   {
//     id: 3,
//     title: 'class',
//     desc: 'Complete classes',
//   },
// ];

// const App = () => {
//   const [todo, setTodo] = useState(initialTodo);

//   const handleAdd = () => {
//     const newTodo = {
//       id: todo.length + 1, // Fix: Use a unique id based on the current length
//       title: 'new todo',
//       desc: 'this is a new todo',
//     };
//     setTodo([...todo, newTodo]);
//   };

//   return (
//     <>
//       <button onClick={handleAdd}>Add todo</button>
//       {todo.map((todoItem) => {
//         return <Todo key={todoItem.id} title={todoItem.title} desc={todoItem.desc} />;
//       })}
//     </>
//   );
// };

// const Todo = ({ title, desc }) => {
//   return (
//     <>
//       <h2>{title}</h2>
//       <h5>{desc}</h5>
//     </>
//   );
// };

// export default App;

// import React from 'react'

// const App = () => {
//   return (
//     <>
//       <CardWrapper>
//         HI there
//       </CardWrapper>
//       <CardWrapper>
//         HI there
//       </CardWrapper>
      
//     </>
//   )
// }

// function CardWrapper({children}){
//   return (
//     <div style={{border: "1px solid black", padding: "20px"}}>
//       {children}
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react'

const App = () => {
  const [todo, setTodo] = useState([]);

  useEffect(()=>{
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async(res)=>{
      const json = await res.json();
      setTodo(json.todos)
    })
  },[])

  return (
    <>
      {todo.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </>
  )
}

function Todo ({title, description}){
  return (
    <>
    <div>{title}</div>
    <div>{description}</div>
  </>
  )
}

export default App