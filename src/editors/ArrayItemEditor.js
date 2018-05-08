import React from 'react'
import {withStyles} from 'material-ui/styles'
import GeneralEditor from '../GeneralEditor'
import RemoveIcon from '@material-ui/icons/Remove'
import IconButtonDefault from 'material-ui/IconButton'
import IconArrowUpward from '@material-ui/icons/ArrowUpward'
import IconArrowDownward from '@material-ui/icons/ArrowDownward'
import cx from 'classnames'

const IconButton = withStyles({
  root: {
    width: 20,
    height: 20,
    marginRight: 2
  },
  label: {
    width: 16,
    height: 16
  }
})(IconButtonDefault)

const decorate = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 7,
    paddingRight: 5
  },
  editor: {
    flex: 1
  },
  invisible: {
    visibility: 'hidden'
  }
})

class ArrayItemEditor extends React.Component {
  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.value !== this.props.value
  }

  render () {
    const {classes, onRemove, onUp, onDown, ...rest} = this.props

    return (
      <div className={cx('MUJE-ArrayItem', classes.root)}>
        <IconButton onClick={onRemove} color='primary'>
          <RemoveIcon />
        </IconButton>

        <IconButton
          className={cx({[classes.invisible]: !onUp})}
          onClick={onUp}
          color='primary'
        >
          <IconArrowUpward />
        </IconButton>

        <IconButton
          className={cx({[classes.invisible]: !onDown})}
          onClick={onDown}
          color='primary'
        >
          <IconArrowDownward />
        </IconButton>

        <div className={classes.editor}>
          <GeneralEditor {...rest} />
        </div>
      </div>
    )
  }
}

export default decorate(ArrayItemEditor)
