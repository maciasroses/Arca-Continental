import React from 'react';
import './SideDrawer.css';

import { Link } from "react-router-dom";
import { FaBookmark, FaCrown, FaWeixin, FaInfoCircle } from "react-icons/fa";

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className = {drawerClasses}>
            <ul>
                <li>
                    <a id= "entrega" className = "menu-item1" href= '/entregas'>
                        <FaBookmark />
                        <Link className ="link-txt" to = '/entregas'>Entregas</Link>
                    </a>
                    
                </li>
                <li>
                <a id= "ranking" className = "menu-item" href= '/ranking'>
                        <FaCrown />
                        <Link className ="link-txt" to = '/ranking'>Ranking</Link>
                    </a>
                </li>
                <li>
                <a id= "chat" className = "menu-item" href= '/chat'>
                        <FaWeixin />
                        <Link className ="link-txt" to = '/chat'>Chat</Link>
                    </a>
                </li>
                <li>
                <a id= "about" className = "menu-item" href= '/about-us'>
                        <FaInfoCircle />
                        <Link className ="link-txt" to = '/about-us'>Sobre TWI</Link>
                    </a>
                </li>
            </ul>
        </nav>
    );
};


export default sideDrawer;