import { useEffect, useState } from 'react'
import axios from 'axios'

// const useIsOnline=()=>{
//     return window.navigator.onLine;
// }

const useMousePointer=()=>{
    const [position, setPosition] = useState({x: 0, y:0});

    const handleMouse=(e)=>{
        setPosition({x: e.clientX, y: e.clientY});
    }

    useEffect(()=>{
        window.addEventListener('mousemove', handleMouse);
        return ()=>{
            window.removeEventListener('mousemove', handleMouse);
        }
    },[])

    return position;
}

function App() {
    // const isOnline = useIsOnline();
    // if(isOnline){
    //     return "Yes you are online"
    // }else{
    //     return "Connect to internet to acces the website"
    // }

    const mousePointer = useMousePointer();




  return (
    <>
        Your Mouse is at {mousePointer.x} {mousePointer.y}
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