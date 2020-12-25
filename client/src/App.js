import './App.css';
import Navbar from './components/navbar/Navbar';

import Legacy from './pages/previous_tirutsavas/TirutsavaLegacy';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Legacy />
    </Router>
  );
}

export default App;
