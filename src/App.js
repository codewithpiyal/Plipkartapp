import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Components/Login';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
      
    </div>
  );
}

export default App;
