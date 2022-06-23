import { AxiosError, AxiosResponse } from 'axios';
import { Login } from 'internal/user/api';
import type { NextPage } from 'next';
import React from 'react';

const LoginPage: NextPage = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    Login(email, password)
      .then((res: AxiosResponse) => {
        console.log(res.data);
      })
      .catch((err: AxiosError) => alert(err.message ));
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input name="email" type="text" placeholder="email" />
        <input name="password" type="password" placeholder="password" />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default LoginPage;
