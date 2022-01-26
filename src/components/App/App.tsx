import React, { memo } from 'react'

import ThrowErrorButton from './../Common/Button'
import ThrowError from './../Common/Error'

import './App.css'

function App(): React.ReactElement {
  return (
    <main className="App">
      {/* <ThrowError /> */}
      <ThrowErrorButton />
    </main>
  )
}

export default memo(App)
