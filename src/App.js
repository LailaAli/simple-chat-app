import React, { useState } from "react";
import css from "./App.module.scss";
import { LoginView } from "./components/LoginView/LoginView";
import { Header } from "./components/Header/Header.jsx";
import { Sidebar } from "./components/Sidebar/Sidebar.jsx";
import { ChatWindow } from "./components/ChatWindow/ChatWindow.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

export const App = () => {
   const [{ user }, dispatch] = useStateValue();

   return (
      <div className={css.app}>
         <Router>
            {!user ? (
               <LoginView />
            ) : (
               <>
                  <Header />
                  <div className={css.appBody}>
                     <Sidebar />
                     <Switch>
                        <Route path="/channels/:channelsId">
                           <ChatWindow />
                        </Route>
                        <Route Route path="/channels/S15RVy0RNVb0huxiuqPu">
                           <ChatWindow />
                        </Route>
                     </Switch>
                  </div>
               </>
            )}
         </Router>
      </div>
   );
};

export default App;
