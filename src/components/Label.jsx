import React from 'react'

const Label = ({ htmlFor, children, className }) => {
    return (
        <div>
            <label htmlFor={htmlFor} className={className}>
                {children}
            </label>

        </div>
    )
}

export default Label