import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar(props){
    return(
        <nav>
            <div className="logo"> E Dukaan </div>
            <div> 
                <ul >
                <Link to="/"> <li>DashBoard</li> </Link>  
                <Link to="/registration"><li>Store Registration</li> </Link>
                <Link to="/Productmanagement"><li>Product Management</li> </Link>
                <Link to="/FAQ"><li>Tutorial</li> </Link>
                    <input type="text" placeholder='Search in site' />
                </ul>
            </div>
        </nav>
    )
}
export default Navbar