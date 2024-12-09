import React from 'react'

const Select = ({children,title}) => {
  return (
    <div>
        <label htmlFor="" className='w-6'> </label>
            <h1>{title}</h1>
            <select >
                {children}
            </select>
       
    </div>
  )
}

export const Option = ({children,value})=>{
    return(
        <option value={value}>
            {children}
        </option>
    )
}

export default Select
