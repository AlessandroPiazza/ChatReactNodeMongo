import React from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup';

import { signUpResquest } from '../../store/modules/auth/actions';


const schema = Yup.object().shape({
  username: Yup.string().required('Username é obrigatório'),
  password: Yup.string().required('Senha é obrigatório'),
})
export default function SingUp() {

  const dispatch = useDispatch()


  function handleSubmit({username, password}){
    dispatch(signUpResquest(username, password))
  }
  return (
    <>
      <h1>Cadastro</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="username" type="text" placeholder="Seu username" />
        <Input name="password" type="password" placeholder="Sua Senha" />
        <button type="submit">Criar conta</button>
        <Link to="/consultant">Já tenho login.</Link>
      </Form>

    </>
  );
}
