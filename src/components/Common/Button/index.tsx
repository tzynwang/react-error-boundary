import React, { memo } from 'react'

function ThrowErrorButton(): React.ReactElement {
  const handleButtonClick = () => {
    throw new Error('An Error from the button')
  }

  return <button onClick={handleButtonClick}>Click me to throw an Error</button>
}

export default memo(ThrowErrorButton)
