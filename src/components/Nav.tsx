import React from "react";
import './components-css/Nav.css'

const Nav = () => {
    return (<nav className='navigation'>
        <div>
            <a>Profile</a>
        </div>
        <div>
            <a>Messeges</a>
        </div>
        <div>
            <a>News</a>
        </div>
        <div>
            <a>Music</a>
        </div>
        <div>
            <a>Settings</a>
        </div>
    </nav>
    )
}

export default Nav