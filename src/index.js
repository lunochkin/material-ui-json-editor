import React from 'react'
import GeneralEditor from './GeneralEditor'

class JsonEditor extends React.Component {
  state = {
    error: null
  }

  componentDidCatch (error) {
    this.setState({
      error
    })
  }

  render () {
    if (this.state.error) {
      return <div>Error</div>
    }

    return (
      <GeneralEditor {...this.props} root />
    )
  }
}

export default JsonEditor
