import React from 'react';
import { useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';
// import { Container } from './styles';


export default function Dashboard() {

const dispatch  = useDispatch()
function handleSignOut() {
  dispatch(signOut())
}
  return (

      <button onClick={handleSignOut}>Sair</button>


  );
}
