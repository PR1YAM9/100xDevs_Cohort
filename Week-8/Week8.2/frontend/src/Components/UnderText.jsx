import React from 'react'
import {Link} from 'react-router-dom'
const UnderText = ({text,link,route}) => {
  return (
    <>
       
          <p className='text-sm font-normal text-gray-500'>{text} <Link to={route}>{link}</Link></p>

    </>
  )
}

export default UnderText