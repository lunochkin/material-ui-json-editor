import React from 'react'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconButtonDefault from '@material-ui/core/IconButton'

const Expander = ({expanderClassName, expanded, onClick}) =>
  <IconButtonDefault className={expanderClassName} onClick={onClick}>
    {expanded
      ? <ExpandLessIcon />
      : <ExpandMoreIcon />
    }
  </IconButtonDefault>

export default Expander
