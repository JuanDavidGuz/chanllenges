export const LoginPage = () => {
	return (
		<>
			<div className='container my-5'>
				<div className='row justify-content-center'>
					<div className='col-md-6'>
						<div className='card'>
							<div className='card-header bg-primary text-white'>
								<h3 className='mb-0'>LoginPage</h3>
							</div>
							<div className='card-body'>
								<form
									className='form'
									role='form'
									autocomplete='off'>
									<div className='form-group'>
										<label for='correo'>Correo Electrónico</label>
										<input
											type='text'
											className='form-control form-control-lg rounded-0'
											name='correo'
											id='correo'
											required=''
										/>
									</div>
									<div className='form-group'>
										<label>Contraseña</label>
										<input
											type='password'
											className='form-control form-control-lg rounded-0'
											id='password'
											required=''
										/>
									</div>
									<button
										type='submit'
										className='btn btn-success btn-lg float-right'>
										Iniciar Sesión
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
