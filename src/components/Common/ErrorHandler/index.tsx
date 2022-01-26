import React, { memo } from 'react'

import { ErrorHandlerProps } from './types'

function ErrorHandler(props: ErrorHandlerProps): React.ReactElement {
  const { children } = props

  try {
    return children
  } catch (error) {
    return <h1>There are some trouble now.</h1>
  }
}

export default memo(ErrorHandler)
