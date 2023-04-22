import { NavLink, Link } from 'react-router-dom';

export const NavComponent = () => {

	return (
		<>
			<div className='mb-4'>
				<nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
            
            <Link 
                className="navbar-brand px-4" 
                to="/"
            >
                Challenge 11
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/"
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/about"
                    >
                        About
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/login"
                    >
                        Login
                    </NavLink>
                </div>
            </div>
        </nav>
			</div>
		</>
	);
};
