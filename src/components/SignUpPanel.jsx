import React from 'react'
import {useRef} from 'react'
import {auth} from '../firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import {toast} from 'react-toastify'

import './SignUpPanel.css'

const SignUpPanel = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const signIn = async e => {
    e.preventDefault()

    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
      )
      const user = userCredentials.user

      if (user) {
        toast.success('Login Successfull')
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const signUp = async e => {
    e.preventDefault()

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
      )
      const user = userCredentials.user

      if (user) {
        toast.success('Sign up Completed login to continue..')
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <div className="signupPanel">
      <form onSubmit={signIn}>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button onClick={signIn} type="submit">
          Sign In
        </button>
        <h4>
          <span className="signupPanel__gray">New to Netflix? </span>
          <span className="signupPanel__link" onClick={signUp}>
            Sign Up Now.
          </span>
        </h4>
      </form>
    </div>
  )
}

export default SignUpPanel
