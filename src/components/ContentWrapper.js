import React from 'react'

const ContentWrapper = ({children,className}) => {
  return (
    <div className={className && 'w-[100%] max-w-[1200px] mx-auto px-[20px]'}>
      {children}
    </div>
  )
}

export default ContentWrapper
