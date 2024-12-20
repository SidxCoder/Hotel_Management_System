import React from 'react'

const Select = ({children,title, onChange}) => {
  return (
    <div>
        <label> </label>
            <h1>{title}</h1>
            <select onChange={onChange}>
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
