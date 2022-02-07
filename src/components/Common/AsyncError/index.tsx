import React, { memo, useEffect } from 'react'

function AsyncError(): React.ReactElement {
  useEffect(() => {
    setTimeout(() => {
      throw new Error('error in setTimeout')
    }, 0)
  }, [])

  return <div>Error in setTimeout</div>
}

export default memo(AsyncError)
