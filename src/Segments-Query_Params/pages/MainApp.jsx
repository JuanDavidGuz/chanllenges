import { Link, Navigate, NavLink, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { ProductsPage } from './ProductsPage';
import { LoginPage } from '../pages/LoginPage';


export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <hr />

        <Router>
            <NavLink to="products/3"> Product by ID </NavLink>

            <Routes>
                <Route path="products">
                    <Route path=":id" element={<ProductsPage/>}/>
                </Route>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="*" element={<Navigate to="/products/1" />}/>
            </Routes>
        </Router>
        </>
    )
}