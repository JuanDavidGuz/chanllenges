import { useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const ProfilePage = () => {
	const { user } = useContext(UserContext);

	return (
		<>
			<div className='container mt-4'>
				<div className='row'>
					<div className='col-md-3'>
						<div className='card'>
							<div className='card-body'>
								<img
									src='https://via.placeholder.com/150'
									alt='Foto de perfil'
									className='img-fluid rounded-circle mb-3'
								/>
								<h3>{ user.name }</h3>
								<p>Web Developer</p>
								<hr />
								<h5>Skills</h5>
								<ul>
									<li>HTML</li>
									<li>CSS</li>
									<li>JavaScript</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col-md-9'>
						<div className='card'>
							<div className='card-body'>
								<h3 className='card-title'>Sobre mi</h3>
								<p className='card-text'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
									rutrum orci velit, sit amet blandit eros dapibus vel. Nulla at
									dolor nec mi sollicitudin bibendum vitae in tortor. Maecenas
									commodo tristique nisi et vestibulum. Nullam feugiat, lacus a
									ultricies consectetur, metus libero euismod risus, vel
									convallis libero nunc eu magna.
								</p>
							</div>
						</div>
						<div className='card mt-3'>
							<div className='card-body'>
								<h3 className='card-title'>Experiencia</h3>
								<ul className='list-unstyled'>
									<li>
										<h5>Web Developer</h5>
										<p>2015 - presente</p>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Duis rutrum orci velit, sit amet blandit eros dapibus vel.
										</p>
									</li>
									<li>
										<h5>Dise</h5>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
