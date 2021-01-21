import React, { useState, useEffect } from "react";
import css from "./ChatWindow.module.scss";
import classNames from "classnames";
import { ChatBlock } from "./ChatBlock.jsx";
// Get data from database
import db from "../../firebase";
// Needed to get id/category/extension of url
import { useParams } from "react-router-dom";
// Icons
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import { ChatTextBox } from "../ChatTextBox/ChatTextBox";

export const ChatWindow = () => {
   // Return an object of the channel rendered. Channel rendered is in the url.
   const { channelsId } = useParams();
   const [channelsDetails, setChannelsDetails] = useState(null);
   const [channelsMessages, setChannelsMessages] = useState([]);

   // If there is a channel id in the url (useParams) then go to the database > collection(channel) > and get the data.
   useEffect(() => {
      if (channelsId) {
         db.collection("channels")
            .doc(channelsId)
            .onSnapshot((snapshot) => setChannelsDetails(snapshot.data()));
      }

      // Get messages
      db.collection("channels")
         .doc(channelsId)
         .collection("messages")
         .orderBy("timestamp", "asc")
         .onSnapshot((snapshot) =>
            setChannelsMessages(snapshot.docs.map((doc) => doc.data()))
         );
   }, [channelsId]); // <= run this useEffect everytime channelsId changes

   return (
      <div className={css.chatWindow}>
         <div className={css.header}>
            <div className={css.header_left}>
               <h4 className={css.channelName}>
                  #{channelsDetails?.name}
                  <button className={css.button}>
                     <StarBorderOutlinedIcon
                        className={classNames(css.starIcon, css.icon)}
                     />
                  </button>
               </h4>
            </div>
            <div className={css.header_right}>
               <button className={css.button}>
                  <PersonAddOutlinedIcon
                     className={classNames(css.personIcon, css.icon)}
                  />
               </button>
               <button className={css.button}>
                  <InfoOutlinedIcon
                     className={classNames(css.infoIcon, css.icon)}
                  />
               </button>
            </div>
         </div>

         {channelsMessages?.map((msg) => (
            <ChatBlock
               key={Math.random()}
               userImage={msg.userImage}
               username={msg.user}
               timestamp={msg.timestamp}
               message={msg.message}
            />
         ))}
         <ChatTextBox
            channelsId={channelsId}
            channelName={channelsDetails?.name}
         />
      </div>
   );
};
