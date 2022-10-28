import React, {useEffect} from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  const [show, setShow] = useState(false)

  const navigate = useNavigate()
  const navBarTransition = () => {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navBarTransition)

    return () => window.removeEventListener('scroll', navBarTransition)
  }, [])

  return (
    <>
      <div className={`navBar ${show && 'navBar__black'}`}>
        <div className="navBar__content">
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="logo"
            className="navBar__logo"
          />
          <img
            onClick={() => navigate('/profile')}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
            className="navBar__avatar"
          />
        </div>
      </div>
    </>
  )
}

export default NavBar
