import React from 'react'
import TextField from '@material-ui/core/TextField'
import withStyles from '@material-ui/core/styles/withStyles'

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

    const props = {...rest}

    if (schema['ui:widget'] === 'dropdown') {
      const resultValue = (value === undefined || value === null) ? schema.defaultValue : value

      return (
        <TextFieldResult
          label={schema.title || field}
          select
          SelectProps={{
            native: true
          }}
          style={schema.hidden ? style.hidden : null}
          value={resultValue}
          onChange={this.handleChange}
          {...props}
        >
          {schema['ui:widget:options'].map(option =>
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )}
        </TextFieldResult>
      )
    }

    const resultValue = (value === undefined || value === null)
      ? ((schema.defaultValue === undefined || schema.defaultValue === null) ? '' : schema.defaultValue)
      : value

    if (schema['ui:widget'] === 'textarea') {
      props.multiline = true
    }

    if (schema.disabled) {
      props.disabled = schema.disabled
    }
    if (schema.required) {
      props.required = schema.required
    }

    return (
      <TextFieldResult
        label={schema.title || field}
        style={schema.hidden ? style.hidden : null}
        value={resultValue}
        onChange={this.handleChange}
        {...props}
      />
    )
  }
}

export default StringEditor
