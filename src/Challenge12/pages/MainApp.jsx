import {
	Navigate,
	Route,
	Routes,
	BrowserRouter as Router,
} from 'react-router-dom';

import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { NavComponent } from '../components/NavComponent';
import { PrivateRoutes } from '../components/PrivateRoutes';
import { ProfilePage } from './ProfilePage';
import { UserProvider } from '../context/UserProvider';
import { ToDosPage } from './ToDosPage';

export const MainApp = () => {

	return (
		<>
			<Router>
				<UserProvider>
					<NavComponent />
					<Routes>
						<Route
							path='/'
							element={<HomePage />}
						/>
						<Route
							path='/about'
							element={<AboutPage />}
						/>
						<Route
							path='/login'
							element={<LoginPage />}
						/>
						<Route
							path='*'
							element={<Navigate to='/' />}
						/>
						<Route
							path='/profile/:id'
							element={
								<PrivateRoutes>
									<ProfilePage />
								</PrivateRoutes>
							}
						/>
						<Route
							path='/toDos/:id'
							element={
								<PrivateRoutes>
									<ToDosPage />
								</PrivateRoutes>
							}
						/>

					</Routes>
				</UserProvider>
			</Router>
		</>
	);
};
