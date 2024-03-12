import React, { useState } from 'react';
import HeadingComponent from '../Components/HeadingComponent';
import SubHeading from '../Components/SubHeading';
import Input from '../Components/Input';
import ButtonCom from '../Components/ButtonCom';
import UnderText from '../Components/UnderText';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const addData = async() => {
    const response =await axios.post('http://localhost:8080/api/v1/user/signup', {
      firstName,
      lastName,
      username,
      password,
    })
    localStorage.setItem("token", response.data.token);
    navigate('/dashboard')
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-center m-5">
        <div className="flex flex-col gap-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
          <HeadingComponent text={"Sign Up"} />
          <SubHeading text={"Please Enter your required information to create an account"} />
          <Input onChange={e => setFirstName(e.target.value)} fieldName={"First Name"} />
          <Input onChange={e => setLastName(e.target.value)} fieldName={"Last Name"} />
          <Input onChange={e => setUsername(e.target.value)} fieldName={"Email"} />
          <Input onChange={e => setPassword(e.target.value)} fieldName={"Password"} />
          <ButtonCom onClick={addData} text={"Sign Up"} />
          <UnderText text={"Already Have an account"} link={'Sign In'} route={'/signin'} />
        </div>
      </div>
    </>
  );
};

export default Signup;
