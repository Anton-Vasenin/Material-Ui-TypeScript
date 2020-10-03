import React, { useState } from 'react'
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import { PersistentDrawer } from './header'

import { Links } from './links'
import { AvatarComp } from './avatar'

import { useStyles } from './style'

interface WidthInt {
  width: {
    width: number
  }
}

export const Navbar = () => {
  const classes = useStyles()
  const [open, setOpen] = useState<boolean>(false)


  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
    <CssBaseline />
    <PersistentDrawer open={open} setOpen={setOpen}/>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
      <AvatarComp  handleDrawerClose={handleDrawerClose}/>
      <Divider />
      <List component="nav" aria-label="main mailbox folders">
          <Links />  { /**  експорт  */ }
      </List>
    </Drawer>
    <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

      </main>
    </div>
  )
}