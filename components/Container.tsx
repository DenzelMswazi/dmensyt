import React from 'react'

const Container = ({children, className }:{ children:React.ReactNode, className?: string}) => {
  return (
    <div>{children}</div>
  )
}

export default Container;