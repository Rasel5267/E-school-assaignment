import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Courses from './Component/Courses/Courses';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="text-center welcome-note">
        <h3>Welcome To Our E-School</h3>
        <p>Your favorite courses is here.You Can Join With Us.</p>
      </div>
      <Courses></Courses>
    </div>
  );
}

export default App;
