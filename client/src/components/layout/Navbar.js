import React from 'react';
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {logoutUser} from "../../actions/authActions";

function NavBar() {
  const currentState = useSelector(state => state);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logoutUser())
  }

  const setView = () => {
    if (currentState.auth.isAuthenticated) {
      return (<span onClick={handleSignOut}>Logout</span>)
    } else {
      return (<div>
      </div>)
    }
  }

  return (<div className="nav-bar">{setView()}</div>)
}

export default NavBar;
