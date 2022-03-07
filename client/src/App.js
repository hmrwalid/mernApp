import './App.css';
import { UserList } from './components/UserList';
import Home from "./components/Home"
import Edit from './components/Edit';
import {Routes, Route, Link} from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import {toggleFalse} from "./JS/action/edit"
import { useDispatch } from 'react-redux';
import Nav from './components/Nav';
import PrivateRoute from "./components/PrivetRoute"
import Login from "./components/Login";
import Dachbord from './components/Dachbord';

function App() {
  const dispatch= useDispatch()
  return (
    <div className="App" > 
    <Nav/>
    

    <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/users" element={
       <PrivateRoute><Dachbord/></PrivateRoute>
     } />
     <Route path="/add" element={<Edit/>}/>
<Route exact path="/edit/:id" element={<Edit/>}/>
 
   </Routes>
    </div>
  );
}

export default App;
{/* 
<Routes>
<Route path='/' element = {<Home/>} />
<Route path='/users' element={<UserList/>}/>
<Route path="/add" element={<Edit/>}/>
<Route exact path="/edit/:id" element={<Edit/>}/>
     <Route path="*" element={<NotFound404 />} />

</Routes> */}