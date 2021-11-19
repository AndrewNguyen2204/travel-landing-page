import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';



function App() {
  return (
    <Router>
      <Routes>

        <Route path="/home" exact element={<Home />} />
        <Route path="/signup" exact element={<SignUp />} />

        <Route path="/" exact element={<Home />} />

      </Routes>
    </Router>

  );
}

export default App;
