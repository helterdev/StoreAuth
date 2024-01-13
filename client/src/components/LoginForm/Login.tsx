'use client'
import { IoAtSharp, IoLockClosedOutline } from "react-icons/io5"
import { Button } from "../UI/Button/Button"
import '../RegisterForm/Form.css';
import '@/components/UI/Input/Input.css';
import Link from "next/link";

export const LoginForm = () => {
    return (
        <form className="registerForm">
      <div className='py-4 text-2xl font-bold text-center'>
        <h3>Login</h3>
      </div>
      
      <div className="flex-column">
        <label htmlFor="email" id="email">
          Email
        </label>
      </div>
      <div>

      </div>
      <div className="flex-column">
        <label htmlFor="password" id="password">
          Password
        </label>
      </div>
      <div>

      </div>
      <div className="flex-row">
        <div>
          <input type="checkbox" />
          <label>Remember me </label>
        </div>
        <span className="span">Forgot password?</span>
      </div>
      <Button message='Register' type="submit"/>
      <p className="p">
      You do not have an account?<span className="span"><Link href={'/register'}>Sign Up</Link></span>
      </p>
    </form>
    )
}