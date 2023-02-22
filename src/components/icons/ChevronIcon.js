import React from 'react'

const ChevronIcon = ({color="white", strokeOpacity="0.38"}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
    <path d="M1 1L5 5L9 1" stroke={color} strokeOpacity={strokeOpacity} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default ChevronIcon