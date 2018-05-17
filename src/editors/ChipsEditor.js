import React from 'react'
import ChipInput from 'material-ui-chip-input'
import {withStyles} from '@material-ui/core/styles'

const decorate = withStyles({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    width: 100,
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '0.8em'
  },
  chipContainer: {
    marginBottom: 0,
    minHeight: 0
  },
  chip: {
    margin: '0 4px 4px 0',
    height: 24
  },
  inputRoot: {
    height: 24
  },
  input: {
    padding: '3px 0',
    fontSize: '0.8em'
  }
})

class ChipsEditor extends React.Component {
  getValue = () => Array.isArray(this.props.value) ? this.props.value : []

  handleAdd = chip => {
    this.props.onChange([...this.getValue(), chip])
  }

  handleDelete = (chip, index) => {
    this.props.onChange(
      this.getValue().filter((one, i) => i !== index)
    )
  }

  render () {
    const {field, classes} = this.props
    const value = this.getValue()

    return (
      <div className={classes.root}>
        <span className={classes.title}>{field}</span>
        <ChipInput
          onAdd={this.handleAdd}
          onDelete={this.handleDelete}
          value={value}
          classes={{
            chipContainer: classes.chipContainer,
            chip: classes.chip,
            inputRoot: classes.inputRoot,
            input: classes.input
          }}
        />
      </div>
    )
  }
}

export default decorate(ChipsEditor)
