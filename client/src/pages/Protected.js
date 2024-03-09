import React from 'react'

const Protected = ({children, authentication}) => {
  return (
    <>
        {children}
    </>
  )
}

export default Protected;