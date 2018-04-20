import React from 'react'
import GeneralEditor from '../../GeneralEditor'


class ObjectItemEditor extends React.Component {
  render() {
    const {className, field, schema, value, onChange, ...rest} = this.props

    return (
      <div className={className}>
        <GeneralEditor
          field={field}
          schema={schema}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </div>
    )
  }
}

export default ObjectItemEditor
