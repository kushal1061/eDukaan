import React from 'react'
import "./viewproducts.css"
import "./addproducts.css"
import add from "../assets/add.png"
import { Link } from 'react-router-dom'
import eye from "../assets/eye.png"
import { useTranslation } from 'react-i18next'

function AddProducts() {
    const { t } = useTranslation();
    
    return (
        <div className='sec-view-product'>
            <section className='view-products'>
                <section className='sideBar'>
                    <ul>
                        <Link to="/viewproducts">
                            <li><img src={eye} alt="" />{t('addproducts.viewProduct')}</li>
                        </Link>
                        <Link to="/addProducts">
                            <li><img src={add} alt="" />{t('addproducts.addProduct')}</li>
                        </Link>
                    </ul>
                </section>
                <div>
                    <h1>{t('addproducts.dragAndDrop')}</h1>
                    <div className='view-products-text'>{t('addproducts.manageProducts')}</div>
                </div>
                <div className='img-holder'>

                </div>
            </section>
            <div id="add-form-container">
                <h1>
                    {t('addproducts.productDetails')}
                </h1>
                <form id='add-product'>
                    <div className="add_form_container">
                        <label htmlFor="">{t('addproducts.productName')}</label>
                        <input type="text" placeholder={t('addproducts.enterProductName')} />
                    </div>
                    <div className="add_form_container">
                        <label htmlFor="">{t('addproducts.price')}</label>
                        <input type="text" placeholder={t('addproducts.enterProductPrice')} />
                    </div>
                    <div className="add_form_container">
                        <label htmlFor="">{t('addproducts.description')}</label>
                        <input type="text" placeholder={t('addproducts.enterDescription')} />
                    </div>
                    <div className="add_form_container">
                        <label htmlFor="">{t('addproducts.selectCategory')}</label>
                        <input type="text" placeholder={t('addproducts.selectCategory')} />
                    </div>
                    <div className="addbtncontainer">
                        <button id="cancelbtn">{t('addproducts.cancel')}</button>
                        <button id="registerbtn">{t('addproducts.register')}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProducts