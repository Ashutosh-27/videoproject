import './App.css';
import Home from './srccomponents/Home';
import FormUI from './srccomponents/FormUI';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/form' element={<FormUI />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
