import React from "react";
import css from "./SidebarOption.module.scss";
import classNames from "classnames";
import { useHistory } from "react-router-dom";
import db from "../../firebase";

export const SidebarOption = (props) => {
   const { Icon, title, id, addChannelOption, customClass } = props;

   const history = useHistory();

   const selectChannel = () => {
      if (id) {
         history.push(`/channels/${id}`);
      } else {
         history.push(title);
      }
   };

   const addChannel = () => {
      const channelName = prompt("Please enter the channel name");

      if (channelName) {
         db.collection("channels").add({ name: channelName });
      }
   };

   return (
      <div
         className={classNames(css.sidebarOption, customClass)}
         onClick={addChannelOption ? addChannel : selectChannel}
      >
         {Icon ? (
            <h3 className={css.channelTitle}>
               {" "}
               <Icon className={css.icon} />
               {title}
            </h3>
         ) : (
            <h3 className={css.channelTitle}>
               <span className={css.hastagSymbol}>#</span>
               {title}
            </h3>
         )}
      </div>
   );
};
