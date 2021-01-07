import './App.css';
import Navbar from './components/navbar/Navbar';

import Routes from './Routes';

import { BrowserRouter as Router } from 'react-router-dom';
import HomepagePhone from './components/HomepagePhone/homepage.phone';


function App() {
  return (
    <Router>
    <HomepagePhone />
    {/*<Routes />*/}
    </Router>
  );
}

export default App;
