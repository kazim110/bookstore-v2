import { NavLink, Outlet } from 'react-router-dom';
import '../styles/header.scss';

const Navbar = () => (
  <>
    <header>
      <div id="header-ctr">
        <h1 className="Bookstore-CMS">Bookstore CMS</h1>
        <nav>
          <div>
            <ul>
              <li><NavLink className="BOOKS" to="/">Books</NavLink></li>
              <li><NavLink className="CATEGORIES" to="/categories">Categories</NavLink></li>
            </ul>
          </div>
        </nav>
        <div className="Oval">
          <div className="Mask" />
          <div id="body" />
        </div>
      </div>
    </header>
    <Outlet />
  </>
);
export default Navbar;
