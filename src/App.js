import react from "react";
import "./App.css";
import SuccessPage from './components/SuccessPage';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Switch, Redirect,Routes, } from 'react-router-dom';
  function App() {
    return(
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Register />}/>
        <Route path="/signup" element={< SuccessPage />}/>
        
      </Routes>
    </Router>
    </>
    );
  }
export default App;