import Navbar from "../components/navbar"
import Footer from "../components/footer"
import icon from "../assets/icon.png"
import "./faq.css"
function Faq(){
    const handleclick=()=>{
        
    }
    return(
        <>
        <div className="helpcentre">
                <div className="welcome_t">Welcome to our Help Center</div>
                <div className="how">How can we assist you today?</div>
               <div>
                <input type="text" />
                </div> 
                <div className="btns">
                    <button id="faqBtn">FAQ</button>
                    <button id="chatBtn" onClick={handleclick}>Chat with Bot</button>
                </div>
        </div>
        <section className="FAQ">
            <h2>FAQ</h2>
            <ul>
                <li><img src={icon} alt="" srcset="" />How to get started?</li>
                <li><img src={icon} alt="" srcset="" />What are the system requirements?</li>
                <li><img src={icon} alt="" srcset="" />How do I contact support?</li>
            </ul>
        </section>
        <section className="tutorialVedios">
            <img src="" alt="hi" />
            <div className="tutvediocontainer">
                <h2>Tutorial Videos</h2>
                <div className="beg_adv">
                <span>Beginner</span>
                <span>Advanced</span>

                </div>
                <div className="watch">Watch our tutorial videos to learn more.</div>
            </div>
        </section>
        </>

    )
}
export default Faq