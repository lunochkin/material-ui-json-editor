import React from 'react'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconButtonDefault from 'material-ui/IconButton'

const Expander = ({expanded, onClick}) =>
  <IconButtonDefault onClick={onClick}>
    {expanded ?
      <ExpandLessIcon />
      :
      <ExpandMoreIcon />
    }
  </IconButtonDefault>

export default Expander