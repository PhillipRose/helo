import React from 'react';
import './App.css';
import Auth from './Components/Auth/Auth';
import DashBoard from './Components/DashBoard/DashBoard';
import Form from './Components/Form/Form';
import Nav from './Components/Nav/Nav';
import Post from './Components/Post/Post';

function App() {
  return (
    <div className="App">
    <Auth/>
    <DashBoard/>
    <Form/>
    <Nav/>
    <Post/>
    </div>
  );
}

export default App;
