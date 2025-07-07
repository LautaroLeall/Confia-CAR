import { useLocation } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar.jsx';
import RoutesApp from './routes/routes';
import carsData from './api/carsData';
import './index.css';

const App = () => {
  const location = useLocation();

  // Rutas que muestran contenido especial como navbar
  const rutasConLayout = [
    "/", "/home", "/cars", "/contact",
    "/login", "/register", "/myBookings", "/myPayments"
  ];

  const debeMostrarLayout = rutasConLayout.some((ruta) =>
    location.pathname === ruta || location.pathname.startsWith("/car/")
  );

  return (
    <div className="app-container">
      {debeMostrarLayout && <Navbar />}
      <RoutesApp cars={carsData} />
      {/* {shouldShowFooter && <Footer />} */}
    </div>
  );
};


export default App;

