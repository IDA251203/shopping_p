import { Routes, Route, Link } from 'react-router-dom';
import Home from '../components/home';
import Dashboard from '../components/dashboard';
import AuthUser from '../components/AuthUser';
import './style.css'
import { Selected } from '../components/selected/selected';
import { Account } from '../components/account/account';
import { Nopage } from '../components/Nopage/Nopage';
function Auth() {
    const {token,logout} = AuthUser();
    const logoutUser = () => {
        if(token !== undefined){
            logout();
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark ">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Carts</Link>
                    </li>
                    <li className="nav-item">
                        <span role="button" className="nav-link" onClick={logoutUser}>Logout</span>
                    </li>
                    
                    <button className="nav-button">
                        <Link className="nav-link" to="/selected">
                            <span className="material-symbols-outlined">shopping_cart_checkout</span>
                        </Link>
                    </button>
                    <button className="nav-button">
                        <Link className="nav-link" to="/account">
                            <span className="material-symbols-outlined">person</span>
                        </Link>
                    </button>
                </ul>

            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/selected" element={<Selected/>} />
                    <Route path="/account" element={<Account/>} />
                    <Route path="*" element={<Nopage/>} />
                </Routes>
            </div>
        </>
    );
}

export default Auth;
