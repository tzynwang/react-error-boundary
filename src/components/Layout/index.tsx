import React, { memo } from 'react'

import ErrorBoundary from '@Components/Common/ErrorBoundary'

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
          <div className="column">{column}</div>
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default memo(Layout)
