import './tutorial.css'
function Tutorial() {
    return (
        <div className='con'>
            <div className="tut-heading">Get Started with Tutorials</div>
            <div id="tutorial">
                <div className="tutlist">
                    <img src="" alt="hi" />
                    <div className="tutDetails">
                    <h3>
                        Upload Products                    
                    </h3>
                    <div>
                        Learn how to upload products with ease
                    </div>
                    </div>
                </div>
                <div className="tutlist">
                    <img src="" alt="hi" />
                    <div className="tutDetails">
                        <h3>
                            ONDC Sync
                        </h3>
                        <div>
                            Effortlessly Sync your cataloague with ONDC
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Tutorial