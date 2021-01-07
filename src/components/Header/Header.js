import React from 'react'
import css from './Header.module.scss';
// Icons
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Avatar } from '@material-ui/core';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';;

export const Header = props => {
  const {user } = props;

  return (
    <div className={ css.header }>
      <div className={ css.header__left }> </div>

      <div className={ css.header__search }>
    
        {/* <div className={css.header__searchInput}>
          <SearchIcon></SearchIcon>
          <input type="text" placeholder="Search Brightly" />
        </div> */}
          <button className={css.header__timeIcon}><AccessTimeIcon/></button>
        <button className={css.header__searchButton}><SearchIcon></SearchIcon>
          <span className={css.header__searchLabel}>Search Brightly</span>
        </button>

        <button className={css.helpIcon}><HelpOutlineIcon></HelpOutlineIcon></button>
      </div>

      <div className={ css.header__right }>
        
        <button className={css.header__avatarButton}><Avatar className={css.header__avatar} alt={user?.displayName} src={user?.photoURL}></Avatar></button>
      </div>
    </div>
  )
};
