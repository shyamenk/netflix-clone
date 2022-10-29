import React from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import NavBar from '../components/NavBar'
import {selectUser} from '../features/user/userSlice'
import {auth} from '../firebase'
import PlanScreen from './PlanScreen'
import './ProfileScreen.css'
const ProfileScreen = () => {
  const user = useSelector(selectUser)

  const navigate = useNavigate()

  const signOutHandler = () => {
    auth.signOut()
    navigate('/')
  }
  return (
    <div className="profileScreen">
      <NavBar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="profile_Avatar"
          />
          <div className="profileScreen__details">
            <h2>{user?.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlanScreen />
              <button
                onClick={signOutHandler}
                className="profileScreen__signout-btn"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
