import React, { useEffect, useState } from 'react';
// import HeadingComponent from '../Components/HeadingComponent';
// import SubHeading from '../Components/SubHeading';
import {useSearchParams} from 'react-router-dom';
import axios from 'axios';
import TransferMoney from '../Components/TransferMoney';
const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name")

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center w-100 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Send Money</h5>
        <p className="font-normal text-black-700 dark:text-gray-400">{name}</p>
        <TransferMoney id={id}/>
      </div>
    </div> 
  );
}

export default SendMoney;
