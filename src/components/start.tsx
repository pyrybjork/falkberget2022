import content from "../data/content"
import React from 'react';
import oks_logo from "../img/oks-91.png"

type language = 'en' | 'fi' | 'sv'

interface StartProps {
    language: language;
}

const Start: React.FunctionComponent<StartProps> = ({language}: StartProps) => {
    return (
        <div className="start">
            <a className="anchor" id="home"></a>
            <h1>{content.main.title[language]}</h1>

            <p className='description paragraph'>{content.main.description[language]}</p>

            <div className='logos_div'>
            <img src={oks_logo} alt="oulunkiipeilyseura" />
            </div>
        </div>
    )
}

export default Start;