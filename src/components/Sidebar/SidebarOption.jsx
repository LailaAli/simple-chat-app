import React from 'react'
import css from './SidebarOption.module.scss';

export const SidebarOption = props => {
  const { Icon, title } = props;

  return (
    <div className={css.sidebarOption}>      
      {Icon ? <h3 className={css.channelTitle}> <Icon className={ css.icon } />{ title }</h3> : <h3 className={css.channelTitle}><span className={css.hastagSymbol}>#</span>{ title }</h3>}
    </div>
  )
}