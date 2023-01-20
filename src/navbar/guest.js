import { Routes, Route, Link } from 'react-router-dom';
import Home from '../components/home';
import Login from '../components/login';
import { Nopage } from '../components/Nopage/Nopage';
import Register from '../components/register';
import './style.css';

function Guest() {
    return (
        <> 
            <nav className="navbar navbar-expand-sm navbar-dark " >
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                </ul>

            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Nopage/>} />
                </Routes>
            </div>
        </>
    );
}

export default Guest;
