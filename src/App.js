import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Committee from './Pages/Committee/Committee';
import Finance from './Pages/Finance/Finance';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Members from './Pages/Members/Members';
import UpdateProfile from './Pages/UpdateProfile/UpdateProfile';
import Footer from './Utilities/Footer/Footer';
import Header from './Utilities/Header/Header';

function App() {
  return (
    <div className="App">

      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/members' element={<Members></Members>}></Route>
        <Route path='/user/:id' element={<UpdateProfile></UpdateProfile>}></Route>
        <Route path='/committee' element={<Committee></Committee>}></Route>
        <Route path='/finance' element={<Finance></Finance>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
