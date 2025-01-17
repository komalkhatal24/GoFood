
import './App.css';
import Home from "./screens/Home";
import Login from './screens/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from './screens/Signup.js';
import { CartProvider } from './components/ContextReducer.js';
import MyOrder from './screens/MyOrder.js';
import Payment from './screens/Payment.js';
function App() {
  return (
    <CartProvider>
       <Router>
        <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/creatuser" element={<Signup/>}/>
        <Route exact path="/myorder" element={<MyOrder/>}/>
        
        <Route exact path="/payment" element={<Payment/>}/>
        
        </Routes>
      </div>
    </Router>
    </CartProvider>
   

  );
}

export default App;
