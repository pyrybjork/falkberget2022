import React, { useState } from 'react'
import './App.css'

import Navigation from './components/navigation'
import PackingList from './components/packing_list'
import content from "./data/content"

type language = 'en' | 'fi'

const App: React.FunctionComponent = () => {

  const [language, setlanguage] = useState<language>('en');

  const changeLanguage = (lang: language) => {
    setlanguage(lang);
  }

  return (
    <div>
      <Navigation language={language} changeLanguage={changeLanguage}/>

      <div className='content'>
        <h1>{content.main.title[language]}</h1>

        <p className='description paragraph'>{content.main.description[language]}</p>

        <h2 className='falkberget subtitle'>Piteå Falkberget</h2>
        <p className='paragraph'></p>

        <PackingList language={language}></PackingList>
      </div>
    </div>
  );
}

export default App