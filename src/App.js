import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';

function App() {
  return (
    <main className="main">
      <header className="header">
    <div>
     <nav className="nav">
       <ul className="menu">
         <li className="menu-item">
         <a href= "#" className="menu-item-link" >home </a>
         </li>
         <li className="menu-item">
         <a href= "#"  className="menu-item-link">about </a>
         </li>
         <li className="menu-item">
         <a href= "#"  className="menu-item-link">contact </a>
         </li>
       </ul>
     </nav>
    </div>
    </header>
    <aside className="aside">
      <ul className="menu">
        <li className="menu-item"><h2>lo mas comentado</h2></li>
        <li className="menu-item"><h2>lo mas visto</h2></li>
      </ul>
    </aside>

    <section className="section">

    <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            
    </section>

    <footer className="footer">
        <p className="copyright">todos los derechos reservados, 2019</p>
    </footer>
    </main>
  );
}

export default App;
