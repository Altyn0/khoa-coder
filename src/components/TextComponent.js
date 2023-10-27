import React from 'react'

const TextComponent = (props) => {
    const { text,color,size,margin,fontWeight } = props ;

  return (
    <div>
        <p style={{
           color: color ?? 'coral', 
           fontSize: size ?? 14 ,
           margin: margin ?? 0,
           fontWeight: fontWeight ?? '500',
        }}
        >{text}</p>
    </div>
  )
}

export default TextComponent