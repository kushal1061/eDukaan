import React from 'react'
import add from "../assets/add.png"
import { Link } from 'react-router-dom'
import eye from "../assets/eye.png"
import "./viewproducts.css"
function Viewproducts() {
    return (
        <>
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
            <div className='products'>

            </div>
            <div className="view-product-grid">
                <div className='view-card'>
                    <img src="" alt="" />
                    <div>
                        <div className='card-line1'>
                            <span className="view-name">Detergent</span>
                            <span className="qty">Qty</span></div>
                        <div className='card-line1'>
                            <span className="price">Price : $10</span>
                            <span className='quantity'>10 Pkt</span>
                        </div>
                    </div>
                </div>
                <div className='view-card'>
                    <img src="" alt="" />
                    <div>
                        <div className='card-line1'>
                            <span className="view-name">Detergent</span>
                            <span className="qty">Qty</span></div>
                        <div className='card-line1'>
                            <span className="price">Price : $10</span>
                            <span className='quantity'>10 Pkt</span>
                        </div>
                    </div>
                </div>
                <div className='view-card'>
                    <img src="" alt="" />
                    <div>
                        <div className='card-line1'>
                            <span className="view-name">Detergent</span>
                            <span className="qty">Qty</span></div>
                        <div className='card-line1'>
                            <span className="price">Price : $10</span>
                            <span className='quantity'>10 Pkt</span>
                        </div>
                    </div>
                </div>
                <div className='view-card'>
                    <img src="" alt="" />
                    <div>
                        <div className='card-line1'>
                            <span className="view-name">Detergent</span>
                            <span className="qty">Qty</span></div>
                        <div className='card-line1'>
                            <span className="price">Price : $10</span>
                            <span className='quantity'>10 Pkt</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='add-btn'>
                <button>Add Product</button>
            </div>
        </>
    )
}

export default Viewproducts