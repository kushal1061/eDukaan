import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import add from "../assets/add.png";
import eye from "../assets/eye.png";
import user from "../assets/userheadset.png";
import Tutorial from "../components/tutorials";
import Templates from "../components/templates";
import "./dashboard.css";

function Dashboard() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <>
            {/* Language Selection */}
            <div className="language-selector">
                <label>{t("language")}:</label>
                <select onChange={(e) => changeLanguage(e.target.value)}>
                    <option value="en">English</option>
                    <option value="hi">हिन्दी (Hindi)</option>
                    <option value="bn">বাংলা (Bengali)</option>
                    <option value="ta">தமிழ் (Tamil)</option>
                    <option value="te">తెలుగు (Telugu)</option>
                    <option value="mr">मराठी (Marathi)</option>
                    <option value="gu">ગુજરાતી (Gujarati)</option>
                    <option value="kn">ಕನ್ನಡ (Kannada)</option>
                    <option value="ml">മലയാളം (Malayalam)</option>
                    <option value="pa">ਪੰਜਾਬੀ (Punjabi)</option>
                </select>
            </div>

            <section className="dashwelcome">
                <h1>{t("dashboard.welcome")}</h1>
                <span>{t("dashboard.manageStore")}</span>
            </section>

            <section className="quickAction">
                <h2>{t("dashboard.quickActions")}</h2>
                <ul>
                    <Link to="/addProducts">
                        <li><img src={add} alt="" /> {t("dashboard.addEditProducts")}</li>
                    </Link>
                    <Link to="/viewProducts">
                        <li><img src={eye} alt="" /> {t("dashboard.viewProducts")}</li>
                    </Link>
                    <Link to="/FAQ">
                        <li><img src={user} alt="" /> {t("dashboard.needAssistance")}</li>
                    </Link>
                </ul>
            </section>

            <Templates />
            <Tutorial />
        </>
    );
}

export default Dashboard;
