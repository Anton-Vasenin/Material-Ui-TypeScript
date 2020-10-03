import React from 'react'
import { Link } from "react-router-dom"
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import { colors } from '../../constant/colors'

import { linksNvabar } from '../../links'


export const Links = () => {

  return (
    <>
    {
    linksNvabar.map((link, index) => {
      return (
        <List key={index}>
        <ListItem button >
          <ListItemIcon>
            <link.icon />
          </ListItemIcon>
            <ListItemText primary={
              <Link style = {{color: colors.successMain}} to={link.url} > {link.text} </Link>
            } />
        </ListItem>
        </List>
      )
    })
    }
    </>
  )
}