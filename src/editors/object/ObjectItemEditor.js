import React from 'react'
import GeneralEditor from '../../GeneralEditor'

class ObjectItemEditor extends React.Component {
  render () {
    const {className, field, schema, value, parentValue, onChange, ...rest} = this.props

    return (
      <div className={className}>
        <GeneralEditor
          field={field}
          schema={schema}
          value={value}
          parentValue={parentValue}
          onChange={onChange}
          {...rest}
        />
      </div>
    )
  }
}

export default ObjectItemEditor
