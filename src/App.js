
import React,{useState} from 'react';
import './App.css';
import styled from "styled-components"
import { Modal } from './components/Modal';
import { GlobalStyle } from './globalStyles';
import Navbar from './components/Navbar';
import Services from './components/Services'
import Products from './components/Products'
import SignUp from './components/SignUp'
import Contactus from './components/Contactus'

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
const Container = styled.div`
      display : flex;
      justify-content : center;
      align-items: center;
      height : 100vh;
` 
const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border : none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`

function App() {
  const [showModal, setshowModal] = useState(false);
  const openModal = () =>{
    setshowModal(prev => !prev)
  }
  return (
    <Router>
    <div className="app">
    <Navbar/>
      
      <Switch>
      
      <Route path="/products"><Products/></Route>
      <Route path="/contact-us"><Contactus/></Route>
      <Route path="/sign-up"><SignUp/></Route>
      <Route path="/services"><Services/></Route>
      <Route path="/"><Container>
        <Button onClick={openModal} >I am a modal</Button>
        <Modal showModal={showModal} setshowModal={setshowModal} />
        <GlobalStyle/>
      </Container></Route>
      </Switch>
  </div>
  </Router>
  );
}

export default App;
