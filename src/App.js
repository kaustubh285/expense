import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";

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
            <h3>Home page</h3>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
