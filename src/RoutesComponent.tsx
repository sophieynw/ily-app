import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Ily from './pages/Ily';
import Footer from './components/Footer';

const routeDefinitions = {
    home: '/',
    ily: '/ily'
}

const RoutesComponent = () => {
    return (
        <>
            <Routes>
                <Route
                    path={routeDefinitions.home}
                    element={<Home />}
                />
                <Route
                    path={routeDefinitions.ily}
                    element={<Ily />}
                />
            </Routes>
            <Footer />
        </>
    )
};

export default RoutesComponent;