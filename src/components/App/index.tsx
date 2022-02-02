import React, { memo } from 'react'

import Layout from '@Components/Layout'
import ManualError from '@Components/Common/Error'

function App(): React.ReactElement {
  return <Layout header={'header'} main={<ManualError />} column={'column'} />
}

export default memo(App)
