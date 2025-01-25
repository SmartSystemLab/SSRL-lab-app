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
    inputClassName,
    labelCLassName,
    placeholder,

}) => {
    return (
        <div>
            <label htmlFor={htmlFor} className={labelCLassName}> {labelText} </label>
            <input
                type={inputType}
                value={inputValue}
                onChange={onChange}
                onBlur={onBlur}
                required
                className={inputClassName}
                placeholder={placeholder}
            />
            {isError && <InputError> {errorMessage} </InputError>}
        </div>
    )
}

export default CustomLabel