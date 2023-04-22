export const HomePage = () => {
	return (
		<>
			<h1>HomePage</h1>
			<div className='jumbotron'>
				<div className='container'>
					<h1 className='display-4'>Bienvenido a Mi Sitio Web</h1>
					<p className='lead'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
						lacus ut nisl hendrerit feugiat vel a sapien.
					</p>
					<hr className='my-4' />
				</div>
			</div>

			<div className='container'>
				<div className='row'>
					<div className='col-md-4'>
						<h2>Sección 1</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
							lacus ut nisl hendrerit feugiat vel a sapien. Curabitur sit amet
							fermentum justo, id vulputate tellus. Duis ullamcorper lectus eu
							risus congue, eget ullamcorper turpis eleifend. Nulla non dolor
							nibh.
						</p>
						<p>
							<a
								className='btn btn-secondary'
								href='#'
								role='button'>
								Ver más
							</a>
						</p>
					</div>
					<div className='col-md-4'>
						<h2>Sección 2</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
							lacus ut nisl hendrerit feugiat vel a sapien. Curabitur sit amet
							fermentum justo, id vulputate tellus. Duis ullamcorper lectus eu
							risus congue, eget ullamcorper turpis eleifend. Nulla non dolor
							nibh.
						</p>
						<p>
							<a
								className='btn btn-secondary'
								href='#'
								role='button'>
								Ver más
							</a>
						</p>
					</div>
					<div className='col-md-4'>
						<h2>Sección 3</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
							lacus ut nisl hendrerit feugiat vel a sapien. Curabitur sit amet
							fermentum justo, id vulputlit. Sed at lacus ut nisl hendrerit
							feugiat vel a sapien. Curabitur sit amet fermentum justo, id
							vulputate.
						</p>
						<p>
							<a
								className='btn btn-secondary'
								href='#'
								role='button'>
								Ver más
							</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
