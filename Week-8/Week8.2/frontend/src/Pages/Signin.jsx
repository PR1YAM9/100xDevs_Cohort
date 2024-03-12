import React from 'react'
import HeadingComponent from '../Components/HeadingComponent'
import SubHeading from '../Components/SubHeading'
import Input from '../Components/Input'
import ButtonCom from '../Components/ButtonCom'
import UnderText from '../Components/UnderText'

const Signin = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center m-5">
        <div className="flex flex-col gap-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
          <HeadingComponent text={"Sign In"} />
          <SubHeading text={"Please Enter Email and Password to Login"} />
          <Input fieldName={"Email"} />
          <Input fieldName={"Password"} />
          <ButtonCom text={"Sign In"} />
          <UnderText text={"Do not have an account"} link={'Sign up'} route={'/signup'} />
        </div>
      </div>
    </>
  )
}

export default Signin