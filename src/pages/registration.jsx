import "./registration.css"
import { useForm } from "react-hook-form"
function Registration() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) => {
        try {
          const token = localStorage.getItem("token"); // Assuming you store JWT in localStorage
    
          const res = await fetch("/api/create-store", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // required by auth middleware
            },
            body: JSON.stringify(data),
          });
    
          const result = await res.json();
    
          if (res.ok) {
            alert("Store created successfully!");
            reset();
          } else {
            alert(result.msg || "Failed to create store");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("Something went wrong");
        }}

    return (
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
                <form className="registration-form" action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form_container">
                        <label htmlFor="">Store Name</label>
                        <input type="text" placeholder="Enter your Store Name" {...register("StoreName")} />
                        <span className="description">Provide a Unique Name for store</span>
                    </div>
                    <div className="form_container">
                        <label htmlFor="">GST Number</label>
                        <input type="text" placeholder="Enter your GST number (optional)" {...register("GST")} />
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
                        <input type="submit" value="submit" />
                    </div>
                </form>

            </div>
        </div>
    )

}
export default Registration