import React, { memo } from 'react'

import Layout from '@Components/Layout'
import ManualError from '@Components/Common/Error'
import AsyncError from '@Components/Common/AsyncError'

function App(): React.ReactElement {
  return <Layout header={<AsyncError />} main={'main'} column={<ManualError />} />
}

export default memo(App)
