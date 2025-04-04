import './navbar.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Navbar(props){
    const { t } = useTranslation();
    
    return(
        <nav>
            <div className="logo"> {t('nav.storeName')} </div>
            <div> 
                <ul >
                
                {props.flag&& <Link to="/dashboard"> <li>{t('nav.dashboard')}</li> </Link> } 
                {/* <Link to="/registration"><li>{t('nav.storeRegistration')}</li> </Link> */}
                <Link to="/UserRegistration"><li>{t('nav.userRegistration')}</li> </Link>
                {props.flag &&<Link to="/Productmanagement"><li>{t('nav.productManagement')}</li> </Link>}
                <Link to="/FAQ"><li>{t('nav.tutorial')}</li> </Link>
                    <input type="text" placeholder={t('nav.searchPlaceholder')} />

                </ul>
            </div>
        </nav>
    )
}
export default Navbar