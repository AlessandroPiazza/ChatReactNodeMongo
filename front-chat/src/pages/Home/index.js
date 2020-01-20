import React from 'react';
import { Link } from 'react-router-dom'

// import { Container } from './styles';

export default function Home() {
  return (
    <>
    <button>
      <Link to="/user">Acessar como Usuário</Link>
    </button>
    <button>
      <Link to="/consultant">Acessar como Consultor</Link>
    </button>
    </>
  );
}
