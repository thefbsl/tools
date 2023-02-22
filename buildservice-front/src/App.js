import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddItem from './items/AddItem';
import Register from './Users/Register';
import Users from './pages/Users';
import EditUser from './Users/EditUser';
import ViewItem from './items/ViewItem';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path = "/" element = {<Home/>} />
        <Route exact path = "/addItem" element = {<AddItem/>} />
        <Route exact path = "/signup" element = {<Register/>} />
        <Route exact path = "/users" element = {<Users/>} />
        <Route exact path = "/edituser/:id" element = {<EditUser/>} />
        <Route exact path="/viewitem/:id" element={<ViewItem/>} />
      </Routes>
      
    </Router>  
    </div>
  );
}

export default App;
