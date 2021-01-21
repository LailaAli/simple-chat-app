import React, { useState, useEffect } from "react";
import css from "./Sidebar.module.scss";
import { SidebarOption } from "./SidebarOption.jsx";
import db from "../../firebase";

// Icons
import CreateIcon from "@material-ui/icons/Create";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AddIcon from "@material-ui/icons/Add";
import { useStateValue } from "../../StateProvider";

export const Sidebar = () => {
   const [{ user }] = useStateValue();

   const sidebarMenu = [
      {
         icon: InsertCommentIcon,
         title: "Threads",
      },
      {
         icon: InboxIcon,
         title: "Mentions & reactions",
      },
      {
         icon: DraftsIcon,
         title: "Saved items",
      },
      {
         icon: BookmarkBorderIcon,
         title: "Channel browser",
      },
      {
         icon: PeopleAltIcon,
         title: "People & user groups",
      },
      {
         icon: AppsIcon,
         title: "Apps",
      },
      {
         icon: FileCopyIcon,
         title: "File browser",
      },
   ];

   const [channels, setChannels] = useState([]);
   const [toggleChannels, setToggleChannels] = useState(false);

   const toggleChannelList = () => {
      setToggleChannels(!toggleChannels);
   };

   // Run this code ONCE when the sidebar component loads
   useEffect(() => {
      db.collection("channels").onSnapshot((snapshot) =>
         setChannels(
            snapshot.docs.map((doc) => ({
               id: doc.id,
               name: doc.data().name,
            }))
         )
      );
   }, []);

   return (
      <div className={css.sidebar}>
         <div className={css.sidebar__header}>
            <div className={css.sidebar__header_accountDetail}>
               <h2 className={css.sidebar__header_channelName}>Chicago Devs</h2>
               <h4 className={css.sidebar__header_user}>
                  {" "}
                  <FiberManualRecordIcon
                     className={css.sidebar__header_userStatusIcon}
                  />{" "}
                  {user?.displayName}
               </h4>
            </div>

            <button className={css.sidebar__header_composeButton}>
               <CreateIcon className={css.sidebar__header_composeIcon} />
            </button>
         </div>

         <div className={css.sidebar__menu}>
            {sidebarMenu.map((item) => (
               <SidebarOption
                  key={Math.random()}
                  Icon={item.icon}
                  title={item.title}
               ></SidebarOption>
            ))}
         </div>

         <div className={css.sidebar__channels}>
            <button className={css.channelsLabel} onClick={toggleChannelList}>
               {toggleChannels ? (
                  <ArrowRightIcon />
               ) : (
                  <ArrowDropDownIcon className={css.arrowIcon} />
               )}
               Channels
            </button>

            {!toggleChannels && (
               <>
                  {channels.map((channel) => (
                     <SidebarOption
                        title={channel.name}
                        id={channel.id}
                        key={Math.random()}
                     ></SidebarOption>
                  ))}
                  <SidebarOption
                     Icon={AddIcon}
                     title={"Add Channel"}
                     addChannelOption
                  />
               </>
            )}
         </div>
      </div>
   );
};
