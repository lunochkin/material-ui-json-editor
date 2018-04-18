import React from 'react'
import StringEditor from './StringEditor'

class NumberEditor extends React.Component {
  handleChange = value => {
    if (!isNaN(value)) {
      this.props.onChange(+value)
    }
  }

  render () {
    return (
      <StringEditor {...this.props} onChange={this.handleChange} />
    )
  }
}

export default NumberEditor
