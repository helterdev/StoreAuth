'use client';
import { IoAtSharp, IoLockClosedOutline } from 'react-icons/io5';
import { CiUser } from 'react-icons/ci';
import './Form.css';
import '../UI/Input/Input.css';
import { Button } from '../UI/Button/Button';
import React from 'react';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormProps = {
  title: string;
};

type InputsRegister = {
  username: string,
  email: string,
  password: string
}

const Form = ({ title }: FormProps) => {
  const { register, watch } = useForm<InputsRegister>();
  
  return (
    <form className="registerForm">
      <div className="py-4 text-2xl font-bold text-center">
        <h3>{title}</h3>
      </div>
      <div className="flex-column">
        <label htmlFor="username" id="username">
          Username
        </label>
      </div>
      <div>
        <div className="input-container">
          {<CiUser />}
          <input
            type="text"
            className="input"
            placeholder="Enter your username"
            id="username"
            {...register('username')}
          />
        </div>
      </div>
      <div className="flex-column">
        <label htmlFor="email" id="email">
          Email
        </label>
      </div>
      <div>
        <div className="input-container">
          {<IoAtSharp />}
          <input
            type="email"
            className="input"
            placeholder="Enter your username"
            id="email"
            {...register('email')}
          />
        </div>
      </div>
      <div className="flex-column">
        <label htmlFor="password" id="password">
          Password
        </label>
      </div>
      <div>
        <div className="input-container">
          {<IoLockClosedOutline />}
          <input
            type="password"
            className="input"
            placeholder="Enter your username"
            id="password"
            {...register('password')}
          />
        </div>
      </div>

      <Button message="Register" type="submit" />
      <p className="p">
        Do you already have an account?
        <span className="span">
          <Link href={'/login'}>Sign In</Link>
        </span>
      </p>
    </form>
  );
};

export default Form;
