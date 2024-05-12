import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";


const Navbar = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addBook">Add Book</NavLink></li>
        <li><NavLink to="/allBooks">All Books</NavLink></li>
        <li><NavLink to="/borrowedBooks">Borrowed Books</NavLink></li>
    </>
    const {logout, user} = useAuth();
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className=""><img className="w-28" src="https://i.ibb.co/GMrMN1w/book-care-logo-template-design-vector-emblem-design-concept-creative-symbol-icon-20029-171.jpg" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end lg:gap-3">
                    {
                        user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL || "https://i.ibb.co/LnFWKKk/download-8.jpg"} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user?.displayName || 'user name not found'}</button>

                                </li>
                                <li>
                                    <button
                                        onClick={logout}
                                        className="btn">Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;