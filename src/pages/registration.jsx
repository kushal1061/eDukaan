import "./registration.css"
function Registration(){
    return(
        <div className="registration_container">
            <div className="registration_heading"> 
                <span className="head">
                Store Registration
                </span>
                <span className="head_des">
                Welcome! Let's get started.
                </span>
            </div>
            <div>
                <form action="">
                    <div className="form_container">
                        <label htmlFor="">Store Name</label>
                        <input type="text" placeholder="Enter your Store Name" />
                        <span className="description">Provide a Unique Name for store</span>
                    </div>
                    <div className="form_container">
                        <label htmlFor="">GST Number</label>
                        <input type="text" placeholder="Enter your GST number (optional)" />
                        <span className="description">Enter if applicable</span>
                    </div>
                    <div className="form_container">
                        <label htmlFor="">Mobile Number</label>
                        <input type="text" placeholder="Enter your mobile number" />
                        <span className="description">Mobile number for communication</span>
                    </div>
                    <div className="form_container">
                        <label htmlFor="">Category</label>
                        <input type="text" placeholder="Select your store category" />
                        <span className="description">Choose the main category of your store</span>
                    </div>
                    <div className="form_container">
                        <label htmlFor="">Owner's Name</label>
                        <input type="text" placeholder="Enter your name" />
                        <span className="description">Name of the store owner</span>
                    </div>
                    <div className="form_container">
                        <label htmlFor="">PAN</label>
                        <input type="text" placeholder="Enter your PAN number" />
                        <span className="description">Permanent Account Number</span>
                    </div>
                    <div className="form_container">
                        <label htmlFor="">Address</label>
                        <input type="text" placeholder="Enter your store address" />
                        <span className="description">Full address including city and pincode</span>
                    </div>
                    <div className="btncontainer">
                    <button id="cancelbtn">Cancel</button>
                    <button id="registerbtn">Register</button>
                </div>
                </form>
               
            </div>
        </div>
    )

}
export default Registration