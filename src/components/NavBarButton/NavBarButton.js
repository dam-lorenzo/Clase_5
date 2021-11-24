import './bootstrap.css'


function NavBarButton({name}) {
    return (
        <li className="nav-item">
            <a className="nav-link" href="#">{name}</a>
        </li>
    )
}

export default NavBarButton