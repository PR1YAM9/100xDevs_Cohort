import React from 'react'
import SubHeading from './SubHeading';
import HeadingComponent from "./HeadingComponent";

const AppBar = () => {
  return (
    <>
        <div className='flex flex-row justify-between m-6'>
            <div className=""><HeadingComponent text={"Payments App"}/></div>
            <div className="">
                <SubHeading text={"Hello User"}/>
            </div>
        </div>
    </>
  )
}

export default AppBar