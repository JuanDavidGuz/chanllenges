import {
	Link,
	Navigate,
	NavLink,
	Route,
	Routes,
	BrowserRouter as Router,
} from 'react-router-dom';

import { AboutPage } from '../pages/AboutPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
//import { NotFoundPage } from './NotFoundPage';
import { NavComponent } from '../components/NavComponent';

export const MainApp = () => {
	return (
		<>
			<Router>
				<NavComponent />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="*" element={<Navigate to="/" />} />
					{/* <Route path="*" element={<LoginPage />} /> */}

				</Routes>
			</Router>
		</>
	);
};
