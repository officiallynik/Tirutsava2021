import './App.css';
import Navbar from './components/navbar/Navbar';

import Routes from './Routes';

import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
