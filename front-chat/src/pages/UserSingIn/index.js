import React from 'react';
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup';

const schema = Yup.object().shape({
  username: Yup.string().required('Username é obrigatório'),
})


export default function UserSingIn() {


  function handleSubmit(data){

  }

  return (
    <>
    <h1>Login</h1>
    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="username" type="text" placeholder="Seu username"></Input>
     <Link to="/chat"> Acessar</Link>
      <Link to="/">Voltar</Link>
    </Form>

  </>
  );
}
