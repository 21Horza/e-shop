import React from 'react'
import "../../styles/Select.module.css"

const Select = ({options, value, onChange, defaultValue}) => {

  return (
    <select 
      className='select'
      onChange={e => onChange(e.target.value)}
      value={value}
    >
      <option value=''>{defaultValue}</option>
      {options.map(option => 
          <option 
            key={option.value} 
            value={option.value}>
              {option.txt}
          </option>
          )}
    </select>
  )
}

export default Select