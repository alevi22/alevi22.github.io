import React, {useState} from 'react';
import './Navbar.css';

/**
 * React component representing a responsive navigation bar with a
 * left-aligned logo and title and right-aligned links.
 * 
 * Usage:
 * ```js
 * <Navbar title="Website Title" logoSrc="./link/to/logo">
 *     <a href="#Home">Home</a>
 *     <a href="#About">About</a>
 *     <a href="#Contact">Contact</a>
 * </Navbar>
 * ```
 */
const Navbar = (props) => {
    const [menuState, setMenuState] = useState(false);

    let navTabClass = "nav-tabs";
    let menuButton = "fa fa-bars";
    if (menuState) {
        navTabClass = "nav-tabs show"
        menuButton = "fa fa-close";
    }

    return (
        <nav>
            <div className="nav-heading">
                <a href="">
                    <img src={props.logoSrc} alt="Logo" />
                </a>
                <h1><a href="">{props.title}</a></h1>
            </div>

            <a className="nav-menu" onClick={() => setMenuState(!menuState)}>
                <i className={menuButton}/>
            </a>

            <div className={navTabClass}>
                {props.children}
            </div>
        </nav>
    );
}

export default Navbar;