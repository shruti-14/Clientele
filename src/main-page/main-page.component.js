import React from 'react';
import {Link} from 'react-router-dom';
function Main() {
    return <div><ul>
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/register">Register</Link></li>
    </ul></div>
}
export default Main;