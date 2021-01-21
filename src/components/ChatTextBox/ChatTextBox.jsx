import React, { useState } from "react";
import css from "./ChatTextBox.module.scss";
import { Button } from "@material-ui/core";
import db from "../../firebase";
import { useStateValue } from "../../StateProvider";
import firebase from "firebase";

export const ChatTextBox = (props) => {
   const { channelName, channelsId } = props;
   const [{ user }] = useStateValue();
   const [input, setInput] = useState("");

   const sendMessage = (e) => {
      e.preventDefault();
      if (!input) return false;
      if (channelsId) {
         db.collection("channels").doc(channelsId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL,
         });
      }
      setInput("");
   };

   return (
      <div className={css.chatTextBox}>
         <form>
            <input
               type="text"
               value={input}
               onChange={(e) => setInput(e.target.value)}
               placeholder={`Message #${channelName?.toLowerCase()}`}
            />
            <Button className={css.submit} type="submit" onClick={sendMessage}>
               Send
            </Button>
         </form>
      </div>
   );
};
