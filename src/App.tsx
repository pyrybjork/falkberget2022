import React, { useState } from 'react'
import './App.css'

import Navigation from './components/navigation'
import PackingList from './components/packing_list'
import content from "./data/content"
import oks_logo from "./img/oks-91.png"

type language = 'en' | 'fi' | 'sv'

const App: React.FunctionComponent = () => {

  const [language, setlanguage] = useState<language>('fi');

  const changeLanguage = (lang: language) => {
    setlanguage(lang);
  }

  return (
    <div>
      <div id='home' />
      <Navigation language={language} changeLanguage={changeLanguage}/>

      <div className='content'>
        <h1>{content.main.title[language]}</h1>

        <p className='description paragraph'>{content.main.description[language]}</p>

        <div className='logos_div'>
          <img src={oks_logo} alt="oulunkiipeilyseura" />
          <img src={oks_logo} alt="oulunkiipeilyseura" />
          <img src={oks_logo} alt="oulunkiipeilyseura" />
        </div>

        <h2 className='falkberget subtitle'>{content.falkberget_info.title[language]}</h2>
        <p className='paragraph'>
          <a href="https://27crags.com/crags/falkberget-603" target="_blank">{content.falkberget_info['27crags'][language]}</a>
          <br />
          <br />
          <a href="https://www.google.com/maps/place/Falkberget+Parkering/@65.380594,21.366302,18z/data=!4m5!3m4!1s0x0:0x6e70188f4d1e2945!8m2!3d65.3808333!4d21.3655556?hl=en-US" target="_blank">{content.falkberget_info.parking[language]}</a>
        </p>

        <PackingList language={language}></PackingList>
      </div>
    </div>
  );
}

export default App