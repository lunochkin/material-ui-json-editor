import React from 'react'
import {withStyles} from 'material-ui/styles'
import Chooser from './Chooser'
import Expander from './Expander'
import cx from 'classnames'
import ObjectItemEditor from './ObjectItemEditor'

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
    const {value, schema, classes, onChange, field, root, ...rest} = this.props

    const title = schema.title || schema.field

    const schemaProps = schema.properties || {}

    const {flexible, notEmptyOnly} = schema

    const propsToChoose = this.getPropsToChoose()

    return (
      <div className={classes.root}>

        {!!title &&
          <h4>{title}</h4>
        }

        {Object.keys(schemaProps).filter(this.isFieldToRender).map(key =>
          <ObjectItemEditor
            field={key}
            key={key}
            className={cx(!root && classes.prop)}
            schema={schemaProps[key]}
            value={value ? value[key] : null}
            onChange={this.handleChange(key)}
            {...rest}
          />
        )}

        {notEmptyOnly &&
          <Expander expanded={this.state.expanded} onClick={this.toggleExpandedMode} />
        }
        {flexible && propsToChoose.length > 0 &&
          <Chooser
            properties={properties}
            onChoice={this.handleChoice}
          />
        }
      </div>
    )
  }

  getPropsToChoose = () => {
    const schemaProps = this.props.schema.properties || {}

    const keys = Object.keys(schemaProps)
    const keysMissed = keys.filter(field => !this.isFieldToRender(field))

    return keysMissed.reduce((acc, key) => ({
      ...acc,
      key: schemaProps[key]
    }), {})
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
      if ((schema.properties || {})[field].required) {
        return true
      }
    }

    return false
  }
}

export default decorate(ObjectEditor)
