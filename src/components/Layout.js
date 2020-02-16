import React from 'react'
import { Link } from 'react-router-dom';

export default function Layout(props) {
    return (
        <div>
            <header>common header</header>
             <Link to='/'>首页</Link>
             <Link to='/user'>User</Link>
             {props.children}
             <footer>common footer</footer>
        </div>
    )
}
