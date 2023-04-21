import './App.css';

import React, { Component } from 'react';

import "./components/header.css";

import Product from './component-state-product/product'
class Prod extends Component{
  render(){
    return (
      <>
        

<div id="header">
   <div id="header-logo">
      <a href="http://www.nationallobsterhatchery.co.uk" className="h-logo">
      <img src="images/lobster.png" />
      </a>
      <h1 className="h-logo">This is header</h1>
      <div style={{clear: 'both'}} />
   </div>
   <div id="header-menu">
      <div id="h-menu">
         <ul className="h-ul-menu">
            <li><a href="index.html#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li>
               <a href="#">News</a>
               <ul>
                  <li><a href="#">Sub menu</a></li>
                  <li><a href="#">Sub menu</a></li>
               </ul>
            </li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Site Map</a></li>
            <li><a href="#">Contact</a></li>
         </ul>
         <div style={{clear: 'both'}} />
      </div>
   </div>
   <div style={{clear: 'both'}} />
</div>


        <Product />

      </>
    );
  }
}

export default Prod;
// const TinhTong = () => {
//   let a = 16;
//   let b = 1;
//   let total = a+b;
//   return (
//     <div className="App">
//       <header className="App-header" id="total">
//         <h1>{a} + {b} = {total}</h1>
//       </header>
//     </div>
//     );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hello Huu</h1>
//       </header>
//     </div>
//   );
// }

// function Huu(){
//   const show =
//   <div className="App">
//       <header className="App-header">
//         <h1>Hello</h1>
//       </header>
//     </div>;
//   return show;
// }