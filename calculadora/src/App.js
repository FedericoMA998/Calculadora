import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './CalculadoraElements/CalculadoraView/VistaCalculadora.jsx'
import VistaCalculadora from './CalculadoraElements/CalculadoraView/VistaCalculadora.jsx'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<VistaCalculadora/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
