import {FaUserAlt, FaSearch, FaShoppingCart, FaAngleDown} from 'react-icons/fa';
import logo from '../../../Media/logo.jpg'
import './Nav.css'

const Nav = () => {
    return ( 
        <nav className='navbar'>
            <div className="logo"> <img src={logo} alt="logo"/> </div>
            <ul className="nav-list">
                <li className='list-elements'>
                    <a href="#home"> <span className="shop-dropdown">Shop <FaAngleDown/></span> </a>
                    <a href="#home">About Us</a>
                    <a href="#home">Our Stores</a>
                    <a href="#home">Contact Us</a>
                </li>
            </ul>
            <div className="helper">
                <div className="search-field">
                    <input type="text" placeholder="Search" /> 
                    <FaSearch className='icon-search'/>
                </div>
                <div className="profile"> <FaUserAlt/> </div>
                <div className="cart"> <FaShoppingCart/> </div>
            </div>
        </nav>
     );
}
 
export default Nav;