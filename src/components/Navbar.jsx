import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="nav">
            <h3 data-aos='fade-down' data-aos-duration='500'> Jobar CV </h3>

            <div className="ul" data-aos='fade-down' data-aos-duration='700'>
                <Link to='/' > <li> Home </li>  </Link>
                <Link to='create'> <li>Create CV </li></Link>
            </div>
        </nav>
     );
}
 
export default Navbar;