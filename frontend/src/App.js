 
import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import {BrowserRouter  as Router,Routes,Route,Navigation} from 'react-router-dom'
import Chats from './components/Chats';
function App() {
  return (
//     <div className="App">
// <Header />
// <TinderCards />
// </div>
    <Router>
      <Routes>
        <Route path='/' element={<Header /> }  />
        <Route path='/chat' element={<Chats />} />
        
      </Routes>
    </Router>
  );
}

export default App;
<div className="App">
<Header />
<TinderCards />
</div>