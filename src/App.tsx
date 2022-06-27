import React, { useState } from 'react'
import './App.css'

import Navigation from './components/navigation'
import PackingList from './components/packing_list'
import FalkbergetInfo from './components/falkberget_info'
import Start from './components/start'
import Program from './components/program'
import SafetyPlan from './components/safety_plan'

type language = 'en' | 'fi' | 'sv'

const App: React.FunctionComponent = () => {

  const [language, setlanguage] = useState<language>('en');

  const changeLanguage = (lang: language) => {
    setlanguage(lang);
  }

  return (
    <div>
      <Navigation language={language} changeLanguage={changeLanguage}/>

      <div className='content'>
        
        <Start language={language} />
        <FalkbergetInfo language={language} />
        <PackingList language={language}></PackingList>
        <Program language={language} />
        <SafetyPlan language={language} />

      </div>
    </div>
  );
}

export default App