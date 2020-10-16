import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/login'>
            <Header />
            <LoginPage />
          </Route>
          <Route path='/' exact>
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
