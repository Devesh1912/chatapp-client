import React, { useContext } from 'react'
import { UserContext } from "../../UserContext";
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';

const Navbar = () => {
  const { user, setUser } = useContext(UserContext)

  const logout = async () => {
    try {
      const res = await fetch('https://myapplication19.herokuapp.com/logout', {
        credentials: 'include',
      })
      const data = res.json();
      console.log('logout data', data)
      setUser(null)
    } catch (error) {
      console.log(error)
    }
  }
  const menu = user?<SignedInMenu logout={logout}/>:<SignedOutMenu/>
  return (
    <>
      <nav className="green">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">VChat</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>

          <ul id="nav-mobile" class="right hide-on-med-and-down">
            {menu}
          </ul>
        </div>
      </nav>
      <ul class="sidenav" id="mobile-demo">
        {menu}
      </ul>
    </>
  )
}

export default Navbar
