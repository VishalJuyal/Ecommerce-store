import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Contact from "./component/Contact";
import About from "./component/About";
import Login from "./component/LogIn";
import Register from "./component/Registration";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/products" Component={Products} />
        <Route exact path="/products/:id" Component={Product} />
        <Route exact path="/cart" Component={Cart} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/Login" Component={Login} />
        <Route exact path="/register" Component={Register} />
      </Routes>
    </>
  );
}

export default App;
