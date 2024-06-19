import React from 'react'

const InputError = ({ children }) => {
    return (
        <p className='text-sm text-errorMsg'>  {children} </p>
    )
}

export default InputError