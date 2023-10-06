import { NavLink, useNavigate } from "react-router-dom"

function NavBar() {
    return (
        <div>
            <nav>
                <NavLink to="/" className="link1">Home</NavLink>
                <NavLink to="/about" className="link1">About</NavLink>
                <NavLink to="/book-us" className="link1">Book Us</NavLink>
                <NavLink to="/donate" className="link1">Donate</NavLink>
                <a className="link1" href="https://linktr.ee/givemegoldband">
                    <img className="insta-link" src="/src/images/linktree2.png" />
                </a>
            </nav>
        </div>
    )
}

export default NavBar
