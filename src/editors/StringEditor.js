import React from 'react'
import {TextField} from '@/components/basic'
import {withStyles} from 'material-ui/styles'

const TextFieldStyled = withStyles({
  root: {
    width: '100%'
  }
})(TextField)

const style = {
  hidden: {
    display: 'none'
  }
}

class StringEditor extends React.Component {
  handleChange = e => {
    this.props.onChange(e.target.value)
  }

  render () {
    const {schema, value, components, onChange, field, ...rest} = this.props

    const TextFieldResult = (components && components.TextField) || TextFieldStyled

    const resultValue = (value === undefined || value === null)
      ? (schema.defaultValue === undefined ? '' : schema.defaultValue) : value

    return (
      <TextFieldResult
        label={schema.title || field}
        style={schema.hidden ? style.hidden : null}
        value={resultValue}
        onChange={this.handleChange}
        {...rest}
      />
    )
  }
}

export default StringEditor
