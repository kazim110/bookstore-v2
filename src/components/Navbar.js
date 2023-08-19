import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav>
      <h1>Book store</h1>
      <div>
        <NavLink to="/">Books</NavLink>
        <NavLink to="/categories">Categories</NavLink>
      </div>
    </nav>
    <Outlet />
  </>
);
export default Navbar;
