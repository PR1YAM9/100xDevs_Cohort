// import React, { lazy, Suspense } from "react";
// import {
//   BrowserRouter,
//   Link,
//   Route,
//   Routes,
//   useNavigate,
// } from "react-router-dom";

// const Dashboard = lazy(() => import("./Components/Dashboard"));
// const Landing = lazy(() => import("./Components/Landing"));

// const App = () => {
//   const navigate = useNavigate();
  
//   return (
//     <>
//       <div>
//         <button
//           onClick={() => {
//             navigate("/");
//           }}
//         >
//           Landing
//         </button>
//         <button
//           onClick={() => {
//             navigate("/dashboard");
//           }}
//         >
//           Dashboard
//         </button>
//       </div>
//       <Routes>
//         <Route path="/dashboard" element={<Suspense fallback={'Loading..'}><Dashboard/></Suspense>} />
//         <Route path="/" element={<Suspense fallback={'Loading..'}><Landing/></Suspense>} />
//       </Routes>
//     </>
//   );
// };

// export default App;


// import React, { useContext, useState } from 'react'
// import { CountContext } from './context';

// const App = () => {

//   const [count, setCount]= useState(0);

//   return (
//     <>
//     <CountContext.Provider value={count}>
//       <Count setCount = {setCount}/><br />
//     </CountContext.Provider>
      
//     </>
//   )
// }
// function Count({setCount}){
//   return <>
//     <CountRenderer />
//     <Button setCount={setCount} />
//   </>
// }
// function CountRenderer(){
//   const count = useContext(CountContext); 
//   return <>
//     {count}
//   </>
// }

// function Button({setCount}){
//   const count = useContext(CountContext)
//   return <>
//     <button onClick={()=>{
//       setCount(count+1);
//     }}>Increase</button>
//     <button onClick={()=>{
//       setCount(count-1);
//     }}>Decrease</button>
//   </>
// }

// export default App

import React from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'

const App = () => {


  return (
    <>
    <RecoilRoot>
      <Count />
    </RecoilRoot>
    </>
  )
}
function Count(){
  return <>
    <CountRenderer /><br />
    <Button />
  </>
}
function CountRenderer(){
  const count = useRecoilValue(countAtom);
  return <>
    {count}
  </>
}
function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector);

  return (
    <>
      {isEven ? "Number is even " : null};
    </>
  )
}

function Button(){
  // const [count,setCount] = useRecoilState(countAtom); To stop re-rendering we should use useSetRecoilValue
  const setCount = useSetRecoilState(countAtom);
  return <>
    <button onClick={()=>{
      setCount(count =>count+1);
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count=>count-1);
    }}>Decrease</button>
  </>
}

export default App