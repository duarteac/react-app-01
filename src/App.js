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

    <div class = "main-info">
    <h1 class ="title" >Design<spam class ="title-light">Agency</spam></h1>
    <p class="subline">make your dreams come true</p>
    <form className="form form-header"><button className="buttom"> get started</button></form>
    </div>
    </header>

    <section className="section-one">

    <h2 class="hidden">Title</h2>
        
    </section>
    <section className="section-two">

<h2>Title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        
</section>
<section className="section-three">

<h2 className= "hiden">Title</h2>
    <ul className="creative">
    <li className="creative-item">
        <article>
          <p className="image" img scr="">
            <h3 className="title">creatice minds</h3>

          </p>
        </article>
      </li>
      <li className="creative-item">
        <article>
          <p className="image" img scr="">
            <h3 className="title">creatice minds</h3>

          </p>
        </article>
      </li>
      <li className="creative-item">
        <article>
          <p className="image" img scr="">
            <h3 className="title">creatice minds</h3>

          </p>
        </article>
      </li>
    </ul>
</section>

    <footer className="footer">
        <p className="copyright">todos los derechos reservados, 2019</p>
    </footer>
    </main>
  );
}

export default App;
