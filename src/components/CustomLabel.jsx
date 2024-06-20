import React from 'react'
import InputError from './InputError.jsx'

const CustomLabel = ({
    htmlFor,
    labelText,
    inputType,
    inputValue,
    onChange,
    onBlur,
    isError,
    errorMessage,

}) => {
    return (
        <div>
            <label htmlFor={htmlFor} className="text-[#666666] inline-block"> {labelText} </label>
            <input
                type={inputType}
                value={inputValue}
                onChange={onChange}
                onBlur={onBlur}
                className=" appearance-none relative block w-full px-3 py-1 border border-[#666666] rounded-lg text-[#111111] opacity-35 focus:outline-none focus:opacity-100 focus:text-black"
            />
            {isError && <InputError> {errorMessage} </InputError>}
        </div>
    )
}

export default CustomLabel