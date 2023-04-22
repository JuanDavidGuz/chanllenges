import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const NavComponent = () => {

	const navigate = useNavigate();

	const { user, logged, setLogged, setUser } = useContext(UserContext);
	const onLogout = () => {
		setUser({});
		setLogged(false);
		navigate('/');
	};

	return (
		<>
			<div className='mb-4'>
				<nav className='navbar navbar-expand-sm navbar-dark bg-dark fixed-top'>
					<Link
						className='navbar-brand px-4'
						to='/'>
						Challenge 12
					</Link>

					<div className='navbar-collapse'>
						<div className='navbar-nav'>
							<NavLink
								className='nav-item nav-link'
								to='/'>
								Inicio
							</NavLink>

							<NavLink
								className='nav-item nav-link'
								to='/about'>
								Sobre nosotros
							</NavLink>
							{logged ? (
								<>
									<NavLink
										className='nav-item nav-link'
										to='/profile/3'>
										Perfil de {user.name}
									</NavLink>
									<NavLink
										className='nav-item nav-link'
										to='/toDos/3'>
										Pendientes
									</NavLink>
									<span
										className='navbar-item nav-link'
										type='button'
										onClick={onLogout}>
										Logout
									</span>
								</>
							) : (
								<>
									<NavLink
										className='nav-item nav-link'
										to='/profile/3'>
										Intenta entrar a perfil sin estar loggeado
									</NavLink>
									<NavLink
										className='nav-item nav-link ml-auto'
										to='/login'>
										Login
									</NavLink>
								</>
							)}
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};
