import './App.css';
import Register from './Pages/Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Component/NavBar';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
// import {useSelector} from 'react-dom';

function App() {

  // const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<Register />} />
          <Route path="/" element={< HomePage />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
