import React from 'react';
import logo from './logo.svg';
import './App.scss';

const user = 'Alex Guerrero';
const date = 'Lunes 26 de junio de 2017';
const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
const likesNumber = 37;

function App() {
  return (
    <div className="App">
      <div className="App__card">
        <header className="App-header">
          <div className="Img-container"><img className="Img" src={logo} alt="avatar" /></div>
          <div className="Name-containter">
            <h1>{user}</h1>
            <small>{date}</small>
          </div>
        </header>
        <main className="App-main">
          <p className="App-text">{text}</p>
        </main>
        <footer className="App-footer">
          <button className="App-btn">read more</button>
          <small className="App-likes">{likesNumber}<span className="App-heart">❤️</span></small>
        </footer>
      </div>
    </div>
  );
}

export default App;
