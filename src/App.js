import React, { useEffect } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen.js';
import { auth } from './firebase';
function App() {
  const user = null
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) { } else { }
    });
    return unsubscribe
  }, [user])

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
