import React from "react";
import css from "./ChatBlock.module.scss";
import classNames from "classnames";

// Icons
import AccountBoxIcon from "@material-ui/icons/AccountBox";

export const ChatBlock = (props) => {
   const { userImage, username, timestamp, message, className } = props;

   return (
      <div className={classNames(css.chatBlock, className)}>
         <div className={css.chatUserImage}>
            {userImage ? (
               <img src={userImage} alt="user" className={css.userImage} />
            ) : (
               <AccountBoxIcon className={css.userIcon} />
            )}
         </div>
         <div className={css.textColumn}>
            <div className={css.textHeader}>
               <span className={css.userName}>{username}</span>
               <span className={css.timestamp}>
                  {new Date(timestamp?.toDate()).toUTCString()}
               </span>
            </div>
            <div className={css.message}>{message}</div>
         </div>
      </div>
   );
};
