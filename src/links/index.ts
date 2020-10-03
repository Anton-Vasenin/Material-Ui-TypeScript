import HomeIcon from '@material-ui/icons/Home'

import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'

import { Page1 } from '../pages/page1'
import { Page2 } from '../pages/page2'
import { Page3 } from '../pages/page3'

const links = [
  { 
    icon: HomeIcon,
    url: '/1',
    text: '1 страница',
    page: Page1
  },
  { 
    icon: FormatAlignJustifyIcon,
    url: '/2',
    text: '2 страница',
    page: Page2
  },
  {
    icon: QuestionAnswerIcon,
    url: '/3',
    text: '3 страница',
    page: Page3
  },
]

///////////////
export const linksNvabar = links.map(val => {
  return {icon: val.icon, url: val.url, text: val.text}
})

export const linksRoute = links.map(val => {
  return {url: val.url, page: val.page}
})
