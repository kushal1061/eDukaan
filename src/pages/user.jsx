import "./user.css"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
function UserRegistration(){
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
          const res = await fetch("http://localhost:3000/api/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
    
          const result = await res.json();
          if (res.ok) {
            alert("User registered successfully!");
          } else {
            alert(result.msg || "Registration failed");
          }
        } catch (error) {
          alert("Error during registration");
        }
      };
    return(
        <div className="user-registration_container">
            <div className="user-registration_heading"> 
                <span className="head">
                User Registration
                </span>
                <span className="head_des">
                Welcome! Let's get started.
                </span>
            </div>
            <div>
                <form className="user-registration-form" action=""  onSubmit={handleSubmit(onSubmit)}>
                    <div className="form_container">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter your Name"{...register("name", { required: true })} />
                        <span className="description">Enter your Full name</span>
                    </div>
                    <div className="form_container">
                        <label htmlFor="">Mobile Number</label>
                        <input type="text" placeholder="Enter your mobile number" {...register("email", { required: true })} />
                        <span className="description">Mobile number for communication</span>
                    </div>
                    <div className="form_container">
                        <label htmlFor="">Category</label>
                        <input type="text" placeholder="Select your store category" {...register("password", { required: true })} />
                        <span className="description">Choose the main category of your store</span>
                    </div>
                    <div className="form_container">
                        <label htmlFor="">E-mail</label>
                        <input type="text" placeholder="Enter your E-mail Id" {...register("mobile", { required: true })} />
                        <span className="description">E-mail ID</span>
                    </div>
                    <div className="form_container">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="Enter your password" {...register("type", { required: true })}/>
                        <span className="description">Password</span>
                    </div>
                    <div className="btncontainer">
                    <button id="cancelbtn">Cancel</button>
                    
                        <input id="registerbtn" type="submit" value="submit" />
                </div>
                </form>
               
            </div>
        </div>
    )

}

export default UserRegistration