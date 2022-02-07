import React, { memo } from 'react'

import ErrorBoundary from '@Components/Common/ErrorBoundary'
import ErrorBoundaryWithError from '@Components/Common/ErrorBoundaryWithError'

import './style.css'
import { LayoutProps } from './types'

function Layout(props: LayoutProps): React.ReactElement {
  const { header, main, column } = props
  return (
    <div>
      <ErrorBoundary>
        <div className="header">{header}</div>
      </ErrorBoundary>
      <div className="container">
        <ErrorBoundary>
          <div className="main">{main}</div>
        </ErrorBoundary>
        <ErrorBoundary>
          <ErrorBoundaryWithError>
            <div className="column">{column}</div>
          </ErrorBoundaryWithError>
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default memo(Layout)
