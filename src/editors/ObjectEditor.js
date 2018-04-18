import React from 'react'
import GeneralEditor from '../GeneralEditor'
import {withStyles} from 'material-ui/styles'
import Chooser from '../Chooser'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconButtonDefault from 'material-ui/IconButton'

const decorate = withStyles({
  root: {},
  prop: {
    marginLeft: 10
  }
})

const addField = (state, field) => {
  if (state.fields.indexOf(field) !== -1) {
    return state
  }
  return {
    ...state,
    fields: state.fields.concat([field])
  }
}

const removeField = (state, field) => {
  if (state.fields.indexOf(field) === -1) {
    return state
  }

  return {
    ...state,
    fields: state.fields.filter(one => one !== field)
  }
}

class ObjectEditor extends React.Component {
  state = {
    fields: [],
    expanded: false
  }

  toggleExpandedMode = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  handleChange = key => oneValue => {
    const value = {...this.props.value, [key]: oneValue}
    this.props.onChange(value)

    this.setState(removeField(this.state, key))
  }

  handleChoice = choice => {
    this.setState(addField(this.state, choice))
  }

  render () {
    const {value, schema, classes, onChange, field, ...rest} = this.props

    const title = schema.title || schema.field

    return (
      <div className={classes.root}>
        {title ? <h4>{title}</h4> : null}
        {Object.keys(schema.properties).filter(this.isFieldToRender).map(key =>
          <div key={key} className={classes.prop}>
            <GeneralEditor
              field={key}
              schema={schema.properties[key]}
              value={value ? value[key] : null}
              onChange={this.handleChange(key)}
              {...rest}
            />
          </div>
        )}

        {this.renderExpander()}
        {this.renderChooser()}
      </div>
    )
  }

  renderExpander () {
    const {schema} = this.props

    if (!schema.notEmptyOnly) {
      return null
    }

    return (
      <IconButtonDefault onClick={this.toggleExpandedMode}>
        {this.state.expanded
          ? <ExpandLessIcon />
          : <ExpandMoreIcon />
        }
      </IconButtonDefault>
    )
  }

  renderChooser () {
    const {schema} = this.props

    if (!schema.flexible) {
      return null
    }

    const keys = Object.keys(schema.properties)

    const keysFiltered = keys.filter(this.isFieldToRender)

    if (keysFiltered.length === keys.length) {
      return null
    }

    const props = keys.filter(key => keysFiltered.indexOf(key) === -1).reduce((acc, key) => {
      acc[key] = schema.properties[key]
      return acc
    }, {})

    return (
      <Chooser
        properties={props}
        onChoice={this.handleChoice}
      />
    )
  }

  isFieldToRender = field => {
    const {schema, value} = this.props
    if ((!schema.flexible && !schema.notEmptyOnly) || this.state.expanded) {
      return true
    }

    if (value && value[field]) {
      return true
    }

    if (schema.flexible) {
      if (this.state.fields.indexOf(field) !== -1) {
        return true
      }
    }

    if (schema.notEmptyOnly) {
      if (schema.properties[field].required) {
        return true
      }
    }

    return false
  }
}

export default decorate(ObjectEditor)
