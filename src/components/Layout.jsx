import { Outlet, Link } from "react-router-dom";
import '../Layout.css';

const Layout = () => {

    return(
        <>
            <div className="container"> 
                <nav className="NavContainer">
                <ul className="Layout">
                        <li className="NavElement">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="NavElement">
                            <Link to="/Pun">Pun Jokes</Link>
                        </li>
                        <li className="NavElement">
                            <Link to="/Programmer">Programmer Jokes</Link>
                        </li>
                        <li className="NavElement">
                            <Link to="/Special">"Special" Jokes</Link>
                        </li>
                </ul>
                </nav>

                <div className="content">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout