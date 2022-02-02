import React, { memo } from 'react'

function ManualError(): React.ReactElement {
  throw new Error('A manual error')
  return <div>here doesn't matter</div>
}

export default memo(ManualError)
