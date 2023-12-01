
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployeeComponenet from './components/ListEmployeeComponenet';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';


function App() {
  return (
  <div>
    <Router>
      <HeaderComponent />
    <div className="container">
        <Routes>
              <Route path="/" element={<ListEmployeeComponenet />} />
              <Route path="/employees" element={<ListEmployeeComponenet />} />
        </Routes>
    </div>
    <FooterComponent/>
    </Router>
  </div>
  );
}

export default App;
