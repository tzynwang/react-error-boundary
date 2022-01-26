import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App/App'
import ErrorBoundary from './components/Common/ErrorBoundary'
// import ErrorHandler from './components/Common/ErrorHandler'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
    {/* <ErrorHandler>
      <App />
    </ErrorHandler> */}
  </React.StrictMode>,
  document.getElementById('root')
)
