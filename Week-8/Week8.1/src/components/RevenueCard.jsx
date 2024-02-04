import React from 'react'

const RevenueCard = ({
    title,
    orderCount,
    amount
}) => {
  return (
    <>
        <div className='bg-white rounded shadow-md p-2'>
            <div className="text-grey-300">{title}</div>
            <div className="flex justify-between  align-centre">
                <div className="font-semibold text-2xl">
                    Rs {amount}
                </div>
                {orderCount ?<div className='flex text-blue-400 underline align-centre'>
                    {orderCount} Orders<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div> : null}
            </div>
        </div>
    </>
  )
}

export default RevenueCard