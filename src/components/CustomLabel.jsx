import React from 'react'
import InputError from './InputError.jsx'

const CustomLabel = ({
    htmlFor,
    labelText,
    inputType,
    inputValue,
    defaultVal,
    onChange,
    onBlur,
    isError,
    errorMessage,
    inputClassName,
    labelClassName,
    placeholder,
    name,
    required = false
}) => {

    return (
        <div>
            <label htmlFor={htmlFor} className={`${labelClassName}`}> {labelText} </label>
            <input
                type={inputType || 'text'}
                value={inputValue}
                id={htmlFor}
                defaultValue={defaultVal}
                onChange={onChange}
                onBlur={onBlur}
                required={required}
                className={`h-10 appearance-none w-full px-3 py-1 border border-slate-900 rounded-lg text-slate-900 opacity-35 focus:outline-none focus:opacity-100 focus:text-black ${inputClassName}`}
                placeholder={placeholder}
                name={htmlFor}
            />
            {isError && <InputError> {errorMessage} </InputError>}
        </div>
    )
}

export default CustomLabel