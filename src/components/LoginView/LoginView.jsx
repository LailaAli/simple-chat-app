import React, { useEffect } from "react";
import css from "./LoginView.module.scss";
import { Button } from "@material-ui/core";
// Get login connection from firebase.js
import { auth, provider } from "../../firebase";

export const LoginView = () => {
   const signIn = () => {
      auth
         .signInWithPopup(provider)
         .then((result) => {
            console.log(result);
         })
         .catch((error) => {
            alert(error.message);
         });
   };

   return (
      <div className={css.loginView}>
         <div className={css.loginContainer}>
            <img
               className={css.slackLogo}
               src="https://logos-world.net/wp-content/uploads/2020/10/Slack-Logo.png"
               alt=""
            />
            <h1 className={css.loginTitle}>Sign in to Chicago Devs</h1>
            <Button onClick={signIn} className={css.button}>
               <span>
                  <img
                     src="https://www.edigitalagency.com.au/wp-content/uploads/google-logo-icon-PNG-Transparent-Background-letter-G-multiple-colors.png"
                     alt=""
                     className={css.googleLogo}
                  />
               </span>{" "}
               <span>Continue with Google</span>
            </Button>
         </div>
      </div>
   );
};
