import './App.scss';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';

export const App = ()=> {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
    </div>
  );
}

export default App;
