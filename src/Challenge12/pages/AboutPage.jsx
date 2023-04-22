export const AboutPage = () => {
	return (
		<>
			<div className='container my-5 p-5'>
				<div className='row'>
					<div className='col-md-6'>
						<h1 className='display-4 mb-4'>Acerca de Nosotros</h1>
						<p className='lead'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
							libero sapien. Nullam id orci risus. Phasellus non nisi non felis
							posuere faucibus ac non sapien. Nam eu ante in lorem accumsan
							blandit vel vitae odio. Fusce et risus vel sapien gravida iaculis.
							Suspendisse convallis velit in tellus molestie, nec mattis nisl
							bibendum. In hac habitasse platea dictumst.
						</p>
					</div>
					<div className='col-md-6'>
						<img
							src='https://www.wpkube.com/wp-content/uploads/2015/10/aboutpage.png'
							className='img-fluid'
							alt='Imagen de Nosotros'
						/>
					</div>
				</div>
			</div>
			<hr />
		</>
	);
};
