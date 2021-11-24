import NavBarButton from '../NavBarButton/NavBarButton'
import MarketIcon from '../MarketIcon/MarketIcon'
import './bootstrap.css'

const NavBar = () => {
    return (    
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Mi ecomerce</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <NavBarButton
                            name = 'Home'
                        />
                        <NavBarButton
                            name = 'Categorias'
                        />
                        <NavBarButton
                            name = 'Promos'
                        />
                        <NavBarButton
                            name = 'Medios de Pago'
                        />
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <MarketIcon />
                        </li>
                        <NavBarButton
                            name = 'Ver carrito'
                        />
                    </ul>
                </div>
            </div>
        </nav>)
}

export default NavBar