import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Payment from "./pages/Payment";
import Signup from "./pages/Signup"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={Home} />
          <Route exact path="/Calendar" component={Calendar} />
          <Route exact path="/Payment" component={Payment} />
          <Route exact path="/Signup" component={Signup} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;