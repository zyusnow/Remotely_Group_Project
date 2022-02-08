import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginFormModal from '../Modals/LoginFormModal';
import SignupFormModal from '../Modals/SignupFormModal';
import ProfileButton from './ProfileButton';
import './NavBar.css';

function NavBar({ loaded }) {
    const location = useLocation();
    const sessionUser = useSelector(state => state.session.user);
    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        if (location.pathname === '/signup' || location.pathname === '/login') {
            sessionLinks = (<></>)
        } else {
            sessionLinks = (
                <>
                    <LoginFormModal />
                    <SignupFormModal />
                </>
            );
        }
    }
    return (
        <>
            <nav className="nav">
                <div className='nav_left'>
                <NavLink id="nav_head" to="/">Remotely</NavLink>
                </div>
                <div className='search_bar'>
                </div>
                <div className='nav_right'>
                    {loaded && sessionLinks}
                </div>
            </nav>
        </>

    )

}

export default NavBar
