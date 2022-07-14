import React, { useState } from 'react'
import './App.css'

import Start from './components/start'
import Navigation from './components/navigation'
import FalkbergetInfo from './components/falkberget_info'
import PackingList from './components/packing_list'
import Program from './components/program'
import SafetyPlan from './components/safety_plan'

import Footer from './components/footer'

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
        <Program language={language} />
        <PackingList language={language}></PackingList>
        <SafetyPlan language={language} />

        <Footer language={language} />
      </div>
    </div>
  );
}

export default App