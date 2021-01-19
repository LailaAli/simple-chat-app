import React from 'react'
import css from './Sidebar.module.scss';
import { SidebarOption } from './SidebarOption';
// Icons
import CreateIcon from '@material-ui/icons/Create';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';




export const Sidebar = props => {
  const { } = props;

  const sidebarMenu = [
    {
    icon: 'InsertCommentIcon',
    title: 'Threads'
    },
    {
    icon: 'InboxIcon',
    title: 'Mentions & reactions'
    },
    {
    icon: 'DraftsIcon',
    title: 'Saved items'
    },
    {
    icon: 'BookmarkBorderIcon',
    title: 'Channel browser'
    },
    {
    icon: 'PeopleAltIcon',
    title: 'People & user groups'
    },
    {
    icon: 'AppsIcon',
    title: 'Apps'
    },
    {
    icon: 'FileCopyIcon',
    title: 'File browser'
    },
    {
    icon: 'ExpandLessIcon',
    title: 'Show less'
    },
  ]

  const channelList = [
    {
      icon: '',
      title: 'Channel 01'
    }
  ]

  return (
    <div className={css.sidebar}>
      <div className={ css.sidebar__header }>
        <div className={ css.sidebar__header_accountDetail }>
          <h2 className={css.sidebar__header_channelName}>Channel Name</h2>
          <h4 className={css.sidebar__header_user}> <FiberManualRecordIcon className={css.sidebar__header_userStatusIcon}/> User name</h4>
        </div>
        
        <button className={ css.sidebar__header_composeButton }><CreateIcon className={ css.sidebar__header_composeIcon }/></button>
      </div>

      <div className={ css.sidebar__menu }>
        { sidebarMenu.map((item, key)=>(
        <SidebarOption key={item.icon} Icon={item.icon} title={item.title}></SidebarOption>
      ))}

      </div>
      
      <div className={ css.sidebar__channels }>
      { channelList.map((item, key)=>(
        <SidebarOption key={item.icon} Icon={item.icon} title={item.title}></SidebarOption>
      ))}
      </div>
   </div>
  )
}