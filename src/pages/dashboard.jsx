import add from "../assets/add.png"
import eye from "../assets/eye.png"
import user from "../assets/userheadset.png"
import Tutorial from "../components/tutorials"
import { Link } from "react-router-dom"
import Templates from "../components/templates"
import "./dashboard.css"
function Dashboard(){
    return (
        <>
        <section className="dashwelcome">
            <h1>
            Welcome to Universal Store <br /> Dashboard
            </h1>
            <span>
            Manage your storefront efficiently            </span>
        </section>
        <section className="quickAction">
            <h2>
                 Quick Actions
            </h2>
            <ul>
                <Link to="/addProducts">
                <li><img src={add} alt=""/>Add/Edit  <br /> Products</li>
                </Link>
                <Link to ="/viewProducts">
                <li><img src={eye} alt=""  />View <br /> Products</li>
                
                </Link>
                <Link to="/FAQ">
                <li> <img src={user} alt="" />Need <br /> Assistance </li>
                </Link>
            </ul>
        </section>
        <section className="manageInventory">
            
        </section>
        <section>

        </section>
        <Templates/>
        <Tutorial/>
        </>
    )
}
export default Dashboard