import React from 'react'

const H1: React.FC<React.ParamHTMLAttributes<HTMLParagraphElement>> = ({
  className,
  children,
}) => {
  const style =
    'text-3xl font-black leading-tight text-primary-on ' + (className || '')
  return <h1 className={style}>{children}</h1>
}

export default H1
