import css from "./App.module.scss";
import { Header } from "./components/Header/Header.jsx";
import { Sidebar } from "./components/Sidebar/Sidebar.jsx";
import { ChatWindow } from "./components/ChatWindow/ChatWindow.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {ChatBlock} from './components/ChatWindow/ChatBlock'

export const App = () => {
   return (
      <div className={css.app}>
         <Router>
            <Header />
            <div className={css.appBody}>
               <Sidebar />
               <Switch>
                  <Route path="/channels/:channelsId">
                     <ChatWindow/>
                  </Route>
                  <Route path="/">
                     <ChatWindow />
                  </Route>
               </Switch>
            </div>
         </Router>
      </div>
   );
};

export default App;
