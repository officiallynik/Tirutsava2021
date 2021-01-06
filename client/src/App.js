import logo from './logo.svg';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import ContactUs from './pages/ContactUs/ContactUs';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <div className="App">
      <Registration/>
      <ContactUs/>
      
    </div>
  );
}

export default App;
