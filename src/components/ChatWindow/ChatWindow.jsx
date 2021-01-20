import React from "react";
import css from "./ChatWindow.module.scss";
import { ChatBlock } from "./ChatBlock.jsx";
// Needed to get id/category/extension of url
import { useParams } from "react-router-dom";

export const ChatWindow = (props) => {
   const {} = props;

   const { channelsId } = useParams();

   return (
      <div className={css.chatWindow}>
         <div className={css.header}>
            <h3># {channelsId}</h3>
         </div>
         <ChatBlock />
      </div>
   );
};
