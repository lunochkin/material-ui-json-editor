import React from 'react'


class CustomEditor extends React.Component {

  handleChange = e => {
    this.props.onChange(e.target.value)
  }

  render() {
    const {value} = this.props

    return (
      <input type="text" value={value || ''} onChange={this.handleChange} />
    )
  }
}

export default CustomEditor
