import React, {useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import LoginScreen from './pages/LoginScreen'
import {ToastContainer} from 'react-toastify'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './firebase'
import {useDispatch, useSelector} from 'react-redux'
import {login, logOut, selectUser} from './features/user/userSlice'

import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import ProfileScreen from './pages/ProfileScreen'
function App() {
  // const [user, setUser] = useState([])
  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        //Login
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          }),
        )
      } else {
        //Logout
        dispatch(logOut())
      }
    })
    return unsubscribe
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <>
            <Route exact path="/" element={<HomeScreen />} />
          </>
        ) : (
          <Route path="/" element={<LoginScreen />} />
        )}
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
