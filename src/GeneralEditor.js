import React from 'react'
import * as editors from './editors'

class GeneralEditor extends React.PureComponent {
  render () {
    const {schema, ...rest} = this.props

    let resultSchema

    if (schema.type === 'integer') {
      resultSchema = {...schema, type: 'number'}
    } else if (schema.type === 'array' && schema.format !== 'complete' && schema.items.type === 'string') {
      resultSchema = {...schema, type: 'chips'}
    } else {
      resultSchema = {...schema}
    }

    const editorName = resultSchema.type.substr(0, 1).toUpperCase() + resultSchema.type.slice(1)

    const Editor = editors[`${editorName}Editor`]

    return (
      <Editor
        schema={resultSchema}
        {...rest}
      />
    )
  }
}

export default GeneralEditor
