import React from 'react'

const TextArea = ({variant, text}) => {
    return <textarea className={variant} placeholder={text}></textarea>
}

export default TextArea
