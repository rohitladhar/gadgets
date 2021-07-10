import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ContactScreen from './screens/ContactScreen.js'
import HomeScreen from './screens/HomeScreen.js';
import MobileScreen from './screens/MobileScreen.js';
import CompareScreen from './screens/CompareScreen.js';
import FilterScreen from './screens/FilterScreen.js';
function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  const allMobile="allMobile"
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
            </button>
            <Link className="brand-naming" to="/">GADGETS</Link>
          </div>
          <div className="header-links">
              <Link className="link-font" to="/compare">Compare</Link>
              <Link className="link-font" to="/filter">Filter</Link>
          </div>

        </header>
        <aside className="sidebar">
          <h2>Mobile Phones</h2>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
            <li>
                <Link to={{pathname:'/mobile',search:"?RealMe"}} 
                onClick={closeMenu} className="sidebar-link">Realme</Link>
            </li>
            <li>
                <Link to="/mobile?Samsung" onClick={closeMenu} className="sidebar-link" replace>Samsung</Link>
            </li>
            <li>
                <Link to="/mobile?Oppo" onClick={closeMenu} className="sidebar-link" replace>Oppo</Link>
            </li>
            <li>
                <Link to="/mobile?Vivo" onClick={closeMenu} className="sidebar-link">Vivo</Link>
            </li>
            <li>
                <Link to="/mobile?Apple" onClick={closeMenu} className="sidebar-link">Apple</Link>
            </li>
            <li>
                <Link to="/mobile?Lenovo" onClick={closeMenu} className="sidebar-link">Lenovo</Link>
            </li>
            <li>
                <Link to="/mobile?Motorola" onClick={closeMenu} className="sidebar-link">Motorola</Link>
            </li>
            <li>
                <Link to="/mobile?Oneplus" onClick={closeMenu} className="sidebar-link">Oneplus</Link>
            </li>
            <li>
                <Link to="/mobile?Xiaomi" onClick={closeMenu} className="sidebar-link">Xiaomi</Link>
            </li>
            <li>
                <Link to="/mobile?Huawei" onClick={closeMenu} className="sidebar-link">Huawei</Link>
            </li>
            <li>
                <Link to="/mobile?Honor" onClick={closeMenu} className="sidebar-link">Honor</Link>
            </li>
            <li>
                <Link to="/mobile?Asus" onClick={closeMenu} className="sidebar-link">Asus</Link>
            </li>
          </ul>

        </aside>
        <main className="main">
          <div className="content">
            
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/contact"  component={ContactScreen} />
            <Route path="/mobile"  component={MobileScreen} />
            <Route path="/compare"  component={CompareScreen} />
            <Route path="/filter"  component={()=><FilterScreen allMobile={allMobile}/>} />
          </div>

        </main>
        <footer className="footer">
          All Rights Reserved.
        </footer>
      </div>
    </BrowserRouter>

  );
}

export default App;