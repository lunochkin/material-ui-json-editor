import React from 'react'
import JsonEditor from '../../src/index'
import CustomEditor from './CustomEditor'

class App extends React.Component {

  state = {
    value: {}
  }

  schema = {
    type: 'object',
    properties: {
      string: {type: 'string'},
      text: {
        type: 'string',
        'ui:widget': 'textarea'
      },
      number: {
        type: 'number'
      },
      custom: {
        type: 'custom',
        'ui:widget': CustomEditor
      },
      checkbox: {type: 'boolean'},
      options: {
        type: 'array',
        format: 'complete',
        items: {
          type: 'object',
          properties: {
            disabled: {type: 'boolean'},
            text: {type: 'string'}
          }
        }
      },
      tags: {
        type: 'array',
        items: {
          type: 'string',
        }
      },
    }
  }

  handleChange = value => {
    this.setState({
      value
    })
  }

  render() {
    return (
      <div>
        <JsonEditor
          schema={this.schema}
          value={this.state.value}
          onChange={this.handleChange}
          // onFocus={this.handleFocus}
          // onKeyUp={this.handleKeyUp}
          // onKeyDown={this.handleKeyDown}
          // components={{TextField: TextFieldCustom}}
        />
      </div>
    )
  }
}

export default App
