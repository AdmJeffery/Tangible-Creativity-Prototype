import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Payment from "./pages/Payment";
import Signup from "./pages/Signup"
import About from "./pages/About"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/signup" component={Signup} />
        
      </div>
    </Router>
  );
}

export default App;