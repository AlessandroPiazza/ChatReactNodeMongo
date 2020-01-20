import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  username: Yup.string().required('Username é obrigatório'),
  password: Yup.string().required('Senha é obrigatório'),
})

export default function SingIn() {
  const dispatch = useDispatch();
  function handleSubmit({username, password}){
    dispatch(signInRequest(username, password))
  }

  return (
    <>
      <h1>Login</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="username" type="text" placeholder="Seu username" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
        <Link to="/">Voltar</Link>
      </Form>

    </>
  );
}
