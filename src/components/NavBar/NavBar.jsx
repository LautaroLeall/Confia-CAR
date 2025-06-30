import './NavBar.css'

const NavBar = () => {
    return (
        <div className='nav'>
            <div className='nav-logo'>
                CONFIA CAR
            </div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li className='nav-contact'>Contact</li>
            </ul>
        </div>
    )
}

export default NavBar
