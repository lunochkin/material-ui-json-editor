import React from 'react'

class CustomEditor extends React.Component {
  handleChange = e => {
    this.props.onChange(e.target.value)
  }

  render () {
    const {value, field, schema} = this.props

    return (
      <div>
        <label>{schema.title || field}</label>
        <input type='text' value={value || ''} onChange={this.handleChange} />
      </div>
    )
  }
}

export default CustomEditor
