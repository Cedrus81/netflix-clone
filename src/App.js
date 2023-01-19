import React, { useEffect } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen.js';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { logout, login } from './features/userSlice';
function App() {
  const user = null
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout)
      }
    });
    return unsubscribe
  }, [])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) :
          (<Routes>
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>)}
      </Router>
    </div>
  )
}

export default App;
