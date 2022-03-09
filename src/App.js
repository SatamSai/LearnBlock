import './App.css';
import Hash from './pages/hash';
import Block from './pages/block';
import BlockChain from './pages/blockchain';
import Peered from './pages/peered';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Hash/>}/>
        <Route path='/block' element={<Block/>}/>
        <Route path='/blockchain' element={<BlockChain/>}/>
        <Route path='/peered' element={<Peered/>}/>
      </Routes>
    </Router>
  );
}

export default App;