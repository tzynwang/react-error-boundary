import React, { memo } from 'react'

import { Props, State } from './types'

const INITIAL_STATE: State = {
  hasError: false,
  errorMessage: null,
  callStack: null
}

class ErrorBoundary extends React.Component<Props, State> {
  state: State = INITIAL_STATE

  static getDerivedStateFromError(error: any) {
    const errorMessage =
      typeof error === 'object' && error !== null && error.message
        ? error.message
        : String(error)

    const callStack =
      typeof error === 'object' && error !== null && error.stack
        ? error.stack.split('\n').slice(1).join('\n')
        : null

    return {
      callStack,
      errorMessage,
      hasError: true
    }
  }

  render() {
    const { children } = this.props
    const { hasError, errorMessage, callStack } = this.state

    if (hasError) {
      return (
        <main>
          <h1>Oops, something goes wrong.</h1>
          <div>{errorMessage}</div>
          <pre>{callStack}</pre>
        </main>
      )
    }

    return children
  }
}

export default memo(ErrorBoundary)
