import React, { useRef } from 'react'
import { auth } from '../firebase'
import './signupScreen.css'

function SignupScreen() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = (e) => {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then((authUser) => {
        console.log(`User created:`, authUser)
      })
      .catch(e => {
        alert(e.message)
      })
  }

  const signIn = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then((authUser) => {
        console.log(authUser)
      })
      .catch(e => {
        alert(e.message)
      })
  }
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="password" />
        <button type="submit" onClick={signIn}>Sign In</button>
        <h4>
          <span className="signupScreen__gray">
            New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>Sign up now.</span>
        </h4>
      </form>
    </div>
  )
}

export default SignupScreen