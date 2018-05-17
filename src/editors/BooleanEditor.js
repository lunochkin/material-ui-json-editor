import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import {withStyles} from '@material-ui/core/styles'

const FormControlLabelStyled = withStyles({
  root: {
    flexDirection: 'row-reverse',
    marginLeft: 0
  },
  label: {
    width: 100,
    fontSize: '0.8em',
    color: 'rgba(0, 0, 0, 0.54)'
  }
})(FormControlLabel)

const CheckboxStyled = withStyles({
  root: {
    width: 16,
    height: 22,
    fontSize: '1.2em'
  }
})(Checkbox)

class BooleanEditor extends React.Component {
  handleChange = e => {
    this.props.onChange(e.target.checked)
  }

  render () {
    const {schema, value, components, onChange, field, ...rest} = this.props

    const resultValue = !!(value === undefined ? schema.defaultValue : value)

    return (
      <FormControlLabelStyled
        label={schema.title || field}
        className='MUJE-Boolean-FormControlLabel'
        control={
          <CheckboxStyled
            checked={resultValue}
            onChange={this.handleChange}
            {...rest}
          />
        }
      />
    )
  }
}

export default BooleanEditor
