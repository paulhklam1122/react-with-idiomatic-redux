import React, { PropTypes } from 'react'

const FetchError = ({ message, onRetry }) => (
  <div>
    <p>Could not fetch todos. {message}</p>
    <button onClick={onRetry}>Retry</button>
  </div>
)
FetchError.propTypes = {
  message: PropTypes.string,
  onRetry: PropTypes.func.isRequired
}

FetchError.defaultProps = {
  message: ''
}

export default FetchError
