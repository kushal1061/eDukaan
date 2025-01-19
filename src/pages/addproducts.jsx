import React from 'react'
import "./viewproducts.css"
import "./addproducts.css"
import add from "../assets/add.png"
import { Link } from 'react-router-dom'
import eye from "../assets/eye.png"
function AddProducts() {
    return (
        <div className='sec-view-product'>
            <section className='view-products'>
                <section className='sideBar'>
                    <ul>
                        <Link to="/viewproducts">
                            <li><img src={eye} alt="" />View Product</li>
                        </Link>
                        <Link to="/addProducts">
                            <li><img src={add} alt="" />Add Product</li>
                        </Link>
                    </ul>
                </section>
                <div>
                    <h1>Drag and Drop to Add Product</h1>
                    <div className='view-products-text'>Easily manage your products and transactions</div>
                </div>
                <div className='img-holder'>

                </div>
            </section>
            <div id="add-form-container">
                    <h1>
                    Product Details
                    </h1>
            <form id='add-product'>

                <div className="form_container">
                    <label htmlFor="">Product Name</label>
                    <input type="text" placeholder="Enter product name" />
                </div>
                <div className="form_container">
                    <label htmlFor="">Price</label>
                    <input type="text" placeholder="Enter product price" />
                   
                </div>
                <div className="form_container">
                    <label htmlFor="">Description</label>
                    <input type="text" placeholder="Enter description" />
                    
                </div>
                <div className="form_container">
                    <label htmlFor="">Select Category</label>
                    <input type="text" placeholder="Select Category" />
                
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

export default AddProducts