import React from 'react'
import "./addproducts.css"
import add from "../assets/add.png"
import { Link } from 'react-router-dom'
import eye from "../assets/eye.png"

export default function Productmanagement() {

  return (<>
    <div className='addProducts'>

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
      <div className='trial'>

        <section className='addProductsWelcome'>
          <h1>Welcome to Product Management</h1>
          <div>Manage your store's products and transactions with ease</div>
        </section>
        <div className='addBtnContainer'>
          <img src={add} alt="" />
          <div>Add/Edit <br /> Products</div>
        </div>
      </div>
    </div>
  </>
  )
}

