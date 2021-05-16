import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './Navbar'
import NavbarBelow from './NavbarBelow';
import Cards from './Menu'
import FData from './Feed_Data';
import Checkout from './Checkout';
import LastPage from './LastPage';
ReactDOM.render(
  <>
    <App />
    <Navbar/>
    <NavbarBelow/>
    <Cards
     imgsrc ={FData[1].image}
      name = {FData[0].name}
      price = {FData[0].price}
      total = "0"
    />
    <Cards
      imgsrc ={FData[1].image}
      name = {FData[1].name}
      price = {FData[1].price}
      total = "0"
    />
    <Cards
      imgsrc ={FData[2].image}
      name = {FData[2].name}
      price = {FData[2].price}
      total = "0"
    />
    <Cards
      imgsrc ={FData[3].image}
      name = {FData[3].name}
      price = {FData[3].price}
      total = "0"
    />
    <Checkout/>
    <LastPage/>
  </>,
  document.getElementById('root')
);
