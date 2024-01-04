// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <Link to="/">
      <li className="link-icon">Home</li>
    </Link>
    <Link to="/about">
      <li className="link-icon">About</li>
    </Link>
  </nav>
)
export default Header
