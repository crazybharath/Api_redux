import React from "react";
import {BrowserRouter , Routes , Route, Link} from "react-router-dom"
import Home from "./components/Home";
import Userlisting from "./components/userlisting";
import Adduser from "./components/Adduser";
import Updateuser from "./components/Updateuser";
import {ToastContainer} from "react-toastify"
import { Provider} from 'react-redux'
import "./App.css"
import Store from "./Redux/Store";
const App = () => {
  return ( 
    <Provider store={Store}>
        <div className="App">
      <BrowserRouter>
      <div className="header">
          <Link to={'/'}>Home</Link>
          <Link to={'/user'}>User</Link>
      </div>
        <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/user" element={<Userlisting/>}/>
             <Route path="/" element={<Adduser/>}/>
             <Route path="/" element={<Updateuser/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer className="toast-position" position="bottom-right"></ToastContainer>
    </div>
    </Provider>
   );
}
 
export default App;