import React, { useEffect } from 'react'

const WelcomeMessage = ({loggingValue}) => {
  useEffect(() => {
   console.log(loggingValue)
  },[loggingValue])
  return (
    <div>
      Welcome Message
    </div>
  )
}

export default WelcomeMessage
