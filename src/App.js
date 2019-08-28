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
         <li className="list-menu">
         <a href= "#" className="list-menu-link" >home </a>
         </li>
         <li className="list-menu">
         <a href= "#"  className="list-menu-link">about </a>
         </li>
         <li className="list-menu">
         <a href= "#"  className="list-menu-link">contact </a>
         </li>
       </ul>
     </nav>
    </div>
    </header>
    <aside className="aside">
      <ul className="menu">
        <li className="list-menu"><h2>lo mas comentado</h2></li>
        <li className="list-menu"><h2>lo mas visto</h2></li>
      </ul>
    </aside>

    <section className="section">

    </section>

    <footer className="footer">
        <p className="copyright">todos los derechos reservados, 2019</p>
    </footer>
    </main>
  );
}

export default App;
