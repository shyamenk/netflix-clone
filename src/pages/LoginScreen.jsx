import React from 'react'
import {useState} from 'react'
import SignUpPanel from '../components/SignUpPanel'
import './LoginScreen.css'

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false)
  return (
    <div className="loginScreen">
      <div className="loginScreen__bg">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignUpPanel />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <form className=".loginScreen__form_container">
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>

              <input
                className="formInput"
                type="email"
                placeholder="Email Address"
              />
              <button
                onClick={() => setSignIn(true)}
                className="loginScreen__getStarted"
              >
                Get Started
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default LoginScreen
