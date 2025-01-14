import React from 'react'
import "./templates.css"
import clothing from '..//assets/clothing.png'
import bakery from '..//assets/bakery.png'
import Tutorial from "../components/tutorials"
function Templates() {
  return (
    <section className="templates">
               <h2>
               Pre-Defined Store Templates
               </h2>
               <div className="templateContainer" >
                   <div className="templateCard">
                       <img src={clothing} alt="" />
                       <span>Kirana Store</span>
                   </div>
                   <div className="templateCard">
                       <img src={clothing} alt="" />
                       <span>Kirana Store</span>
                   </div>
                   <div className="templateCard">
                       <img src={clothing} alt="" />
                       <span>Kirana Store</span>
                   </div>
               </div>
           </section>
  )
}

export default Templates