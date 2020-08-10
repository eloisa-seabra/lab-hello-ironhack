import React, { Component } from 'react';

import './App.css';

function MessageComponent() {
  return (
    <section class="main-section">
      <h1>Say hello to ReactJS</h1>
      <p>
        You will learn a FrontEnd framework from scratch, to become an Ninja
        Developer.
      </p>

      <button> Awesome </button>
    </section>
  );
}

function Nav() {
  return (
    <div>
      <nav className="nav">
        <img src="images/ironhack-logo.svg" className="App-logo" alt="logo" />
        <img src="images/menu-top.svg" className="App-burger" alt="logo" />
      </nav>
    </div>
  );
}

function Images() {
  return (
    <section>
      <div className="items">
        <div className="images">
          <img src="images/icon1.png" alt="icon1" />
          <h2>Declarative</h2>
          <p> React makes it painless to create interactive UIs </p>
        </div>
        <div className="images">
          <img src="images/icon2.png" alt="icon2" />
          <h2> Components </h2>
          <p> Build encapsulated components that manage their state </p>
        </div>
        <div className="images">
          <img src="images/icon3.png" alt="icon3" />
          <h2> Single-Way </h2>
          <p> A set of immutable values are passed to components </p>
        </div>
        <div className="images">
          <img src="images/icon4.png" alt="icon4" />
          <h2> JSX </h2>
          <p> Statically-typed, designed to run on modern browsers </p>
        </div>
      </div>
    </section>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
          <MessageComponent />
        </header>
        <body>
          <Images />
        </body>
      </div>
    );
  }
}

export default App;
