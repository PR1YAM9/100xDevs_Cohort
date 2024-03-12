import React from 'react'

const Input = ({fieldName, onChange}) => {
  return (
    <>
        <div className="">
            <label htmlFor="firstName" className='block mb-2 text-sm font-medium text-gray-900 '>{fieldName}</label>
            <input onChange={onChange} type="text" id='firstName' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' placeholder={fieldName}/>
        </div>
    </>
  )
}

export default Input