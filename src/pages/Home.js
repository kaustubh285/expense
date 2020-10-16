import React, { useState } from "react";
import "../css/Home.css";
import AddExpense from "../components/AddExpense";

function Home() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className='home container'>
      <h3>Home Page</h3>
      <AddExpense setShowForm={setShowForm} showForm={showForm} />
    </div>
  );
}

export default Home;
