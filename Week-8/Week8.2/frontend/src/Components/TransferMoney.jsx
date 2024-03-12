import React, { useState } from 'react'
import Input from './Input'
import ButtonCom from './ButtonCom';
import axios from 'axios';
const TransferMoney = ({id}) => {
    const [amt, setAmt]= useState(0);
    const amtVal = (e)=>{
        setAmt(e.target.value);
    }
    // console.log(amt);

    const sendMoney = ()=>{
        axios.post('http://localhost:8080/api/v1/account/transfer',{
            to: id,
            amount: amt
        },{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
    }
  return (
    <>
        <div className=" my-5 flex flex-col">
            <p className='text-white'>Amount(in Rs)</p>
            <Input  onChange={amtVal}/>
            <button onClick={sendMoney} className='my-3 bg-green-800 text-white p-3 rounded '>Send Money</button>
        </div>
    </>
  )
}

export default TransferMoney    