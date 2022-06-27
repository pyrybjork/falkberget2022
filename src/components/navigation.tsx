import content from "../data/content"
import React, { useState } from 'react';

import { MdMenu, MdClose, MdLaunch } from 'react-icons/md';

type language = 'en' | 'fi' | 'sv'

interface NavigationProps {
    language: language;
    changeLanguage: (language: language) => void
}

const Navigation: React.FunctionComponent<NavigationProps> = ({language, changeLanguage}: NavigationProps) => {
    const [menuToggled, setMenuToggled] = useState(false);

    function toggleMenu() {
        setMenuToggled(!menuToggled);
    }

    function cycleLanguage() {
        const nextLanguage = language === 'en' ? 'fi' : 'en';
        changeLanguage(nextLanguage);
    }

    return (
        <ul className="navigation">
            <li className="float_right" >
                <div className="hamburger_button pointer" onClick={toggleMenu}>{menuToggled? <MdClose className="icon_l"/> : <MdMenu className="icon_l"/>}</div>
            </li>
            <li className="float_left" >
                <div className="language_selector pointer unselectable" onClick={cycleLanguage}>{language.toUpperCase()}</div>
            </li>
        
            {menuToggled? (
                <ul className="hamburger_menu">
                    <li onClick={toggleMenu}><a href="#home">{content.nav.home[language]}</a></li>
                    <li onClick={toggleMenu}><a href="#packing_list">{content.nav.packing_list[language]}</a></li>
                    <li onClick={toggleMenu}><a href="#program">{content.nav.program[language]}</a></li>
                    <li onClick={toggleMenu}><a href="#safety_plan">{content.nav.safety_plan[language]}</a></li>

                    <hr />

                    <li onClick={toggleMenu}><a href="https://github.com/pyrybjork/falkberget2022">{content.nav.source[language]} <MdLaunch /> </a></li>
                </ul>
            ) : null}
    
        </ul>
    );
}

export default Navigation; 