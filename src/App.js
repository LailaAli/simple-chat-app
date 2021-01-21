import React, { useState } from "react";
import css from "./App.module.scss";
import { LoginView } from './components/LoginView/LoginView';
import { Header } from "./components/Header/Header.jsx";
import { Sidebar } from "./components/Sidebar/Sidebar.jsx";
import { ChatWindow } from "./components/ChatWindow/ChatWindow.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {
   const [user, setUser] = useState(null);

   return (
      <div className={css.app}>
         <Router>
            {!user ? (
               <LoginView/>
            ) : (
               <>
                  <Header />
                  <div className={css.appBody}>
                     <Sidebar />
                     <Switch>
                        <Route path="/channels/:channelsId">
                           <ChatWindow />
                        </Route>
                        <Route path="/">
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
