import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import MainPage from './MainPage'; // Importando a página principal
import { Link } from 'react-router-dom';

// Definindo o componente Navbar dentro do App.js
function Navbar() {
  return (
    <nav className="navbar">

    <button className="nav-button">
      <Link to="/main">Página Principal</Link>
    </button>
    <button className="nav-button">
      <Link to="/about">Conecte-se</Link>
    </button>
    <button className="nav-button">
      <Link to="/home">Cadastro</Link>
    </button>
   
  </nav>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>Au-migo</h1>
          <p>Conectando você a passeadores de cães confiáveis.</p>
          
          <img src={`${process.env.PUBLIC_URL}/Pet1.png`} alt="Descrição da Imagem" className="main-image" />
        
        </header>

        {/* Adicionando o Navbar aqui */}
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/main" element={<MainPage />} /> {/* Usando a nova página principal */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Página inicial com o conteúdo original
function HomePage() {
  return (
    <>
      <section className="section">
        <h2>O Problema</h2>
        <p>Na correria do dia a dia, muitos donos de cães têm dificuldade em encontrar passeadores confiáveis e disponíveis...</p>
      </section>
      <section className="section">
        <h2>A Solução</h2>
        <p>Com o Au-migo, você encontra passeadores de cães de confiança de maneira rápida e prática...</p>
      </section>
      <section className="section">
        <h2>Colaboradores</h2>
        <ul>
          <li>Mikael Sousa Bueno</li>
          <li>Leonardo Peron Krause</li>
          <li>Willian Scheuermann</li>
          <li>Giordano Cerutti Cassini</li>
          <li>Riskala Tedoldi</li>
        </ul>
      </section>
    </>
  );
}

export default App;




