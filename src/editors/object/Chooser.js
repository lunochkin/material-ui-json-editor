import React from 'react'
import Menu, {MenuItem} from '@material-ui/core/Menu'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'

class Chooser extends React.Component {
  state = {
    anchorEl: undefined
  }

  handleClick = e => {
    this.setState({
      anchorEl: e.currentTarget
    })
  }

  handleClose = () => {
    this.setState({
      anchorEl: undefined
    })
  }

  handleChoice = key => {
    this.props.onChoice(key)

    this.setState({
      anchorEl: undefined
    })
  }

  render () {
    const {properties} = this.props
    const {anchorEl} = this.state

    return (
      <div>
        <IconButton onClick={this.handleClick} color='primary'>
          <AddIcon />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={this.handleClose}
        >
          {Object.keys(properties).map(key => (
            <MenuItem key={key} onClick={() => this.handleChoice(key)}>
              {properties[key].title || key}
            </MenuItem>
          ))}
        </Menu>
      </div>
    )
  }
}

export default Chooser
