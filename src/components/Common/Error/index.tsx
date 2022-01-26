function ThrowError() {
  throw new Error('Manually generate Error')
  return <div>This doesn't matter since it can't be reach</div>
}

export default ThrowError
