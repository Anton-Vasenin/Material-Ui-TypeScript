import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import {useTheme} from '@material-ui/core/styles';

import { user } from '../../../setting/user'

const useStyles = makeStyles((theme: Theme) =>

  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(2),
      },
    },
    ava: {
      width: theme.spacing(8),  
      height: theme.spacing(8),
    },
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      margin: theme.spacing(1),
    },

  }),
)

interface Props {
  handleDrawerClose: () => void
}

export const AvatarComp = (props: Props) => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <>
    <div className={classes.icon}>
    <IconButton onClick={props.handleDrawerClose} className={classes.icon}>
      {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </IconButton>
    </div>
    <div className={classes.root} >
      
      <Avatar alt="Travis Howard" src="" className={classes.ava} />
      <div>
        <p>{user.name}</p>
        <p>{user.role}</p>
      </div>
    </div>
    </>
  )
}