import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom"

import {ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss'

const Navigation = () => {
  // const { currentUser, setCurrentUser } = useContext(UserContext); // no longer need to hook onto the context because of the authStateChangeListener
  const { currentUser } = useContext(UserContext);
  const signOutHandler = async () => {
   await signOutUser();
    // setCurrentUser(null) // no longer needed because we have the authListener
  }
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">SHOP</Link>
          {currentUser ? <span className="nav-link" onClick={signOutHandler}> Sign Out</span> : <Link className="nav-link" to="/auth">SIGN IN</Link>}
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;