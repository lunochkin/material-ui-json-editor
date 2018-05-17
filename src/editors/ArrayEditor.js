import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import IconButtonDefault from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import ArrayItemEditor from './ArrayItemEditor'

const IconButton = withStyles({
  root: {
    width: 20,
    height: 20
  },
  label: {
    width: 16,
    height: 16
  }
})(IconButtonDefault)

const generateValue = itemSchema => {
  if (itemSchema.type === 'string' || itemSchema.type === 'number' || itemSchema.type === 'integer') {
    return itemSchema.defaultValue !== undefined ? itemSchema.defaultValue : ''
  }
  if (itemSchema.type === 'boolean') {
    return itemSchema.defaultValue !== undefined ? itemSchema.defaultValue : false
  }
  if (itemSchema.type === 'object') {
    const value = {}
    Object.keys(itemSchema.properties).forEach(key => {
      value[key] = generateValue(itemSchema.properties[key])
    })
    return value
  }
  if (itemSchema.type === 'array') {
    return []
  }

  throw new Error(`unknown type: ${itemSchema.type}`)
}

const decorate = withStyles({
  title: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 0,
    fontSize: '0.8em',
    fontWeight: 'normal',
    color: 'rgba(0, 0, 0, 0.54)'
  }
})

class ArrayEditor extends React.Component {
  shouldComponentUpdate (nextProps) {
    return this.props.value !== nextProps.value
  }

  getValue = () => Array.isArray(this.props.value) ? this.props.value : []

  handleChange = index => oneValue => {
    const value = this.getValue().slice()
    value[index] = oneValue
    this.props.onChange(value)
  }

  handleRemove = index => () => {
    const value = this.getValue().filter((one, i) => i !== index)
    this.props.onChange(value)
  }

  handleUp = index => () => {
    this.moveItem(index, index - 1)
  }

  handleDown = index => () => {
    this.moveItem(index, index + 1)
  }

  handleAdd = () => {
    const {schema} = this.props

    this.props.onChange(
      [...this.getValue(), generateValue(schema.items)]
    )
  }

  moveItem = (index, newIndex) => {
    const value = this.getValue()

    if (newIndex < 0 || newIndex >= value.length) {
      return
    }

    const newValue = value.map((one, i) => {
      if (i === index) {
        return value[newIndex]
      }
      if (i === newIndex) {
        return value[index]
      }
      return value[i]
    })

    this.props.onChange(newValue)
  }

  render () {
    const {schema, field, classes, onChange, root, ...rest} = this.props
    const value = this.getValue()

    return (
      <div>
        <h4 className={classes.title}>
          <span>{schema.title || field}</span>
          <IconButton onClick={this.handleAdd} color='primary'>
            <AddIcon />
          </IconButton>
        </h4>
        {value.map((one, index) =>
          <ArrayItemEditor
            {...rest}
            key={index}
            value={one}
            schema={schema.items}
            onChange={this.handleChange(index)}
            onRemove={this.handleRemove(index)}
            onUp={index > 0 ? this.handleUp(index) : null}
            onDown={index < value.length - 1 ? this.handleDown(index) : null}
            field={field}
          />
        )}

      </div>
    )
  }
}

export default decorate(ArrayEditor)
