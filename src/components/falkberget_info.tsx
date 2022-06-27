import content from "../data/content"
import React from 'react';
import boulder_guide from "../img/falkberget_boulder_guide.pdf"

type language = 'en' | 'fi' | 'sv'

interface FalkbergetInfoProps {
    language: language;
}

const FalkbergetInfo: React.FunctionComponent<FalkbergetInfoProps> = ({language}: FalkbergetInfoProps) => {
    return (
        <div className="falkberget_info">
            <h2 className='falkberget subtitle'>{content.falkberget_info.title[language]}</h2>

            <div className='paragraph'>
                <p><a href="https://27crags.com/crags/falkberget-603" target="_blank" rel="noreferrer">{content.falkberget_info['27crags'][language]}</a></p>
                <p><a href="https://www.google.com/maps/place/Falkberget+Parkering/@65.380594,21.366302,18z/data=!4m5!3m4!1s0x0:0x6e70188f4d1e2945!8m2!3d65.3808333!4d21.3655556?hl=en-US" target="_blank" rel="noreferrer">{content.falkberget_info.parking[language]}</a></p>
                <p><a href={boulder_guide} target="_blank" rel="noreferrer">{content.falkberget_info.boulder_guide[language]}</a></p>
            </div>
        </div>
    )
}

export default FalkbergetInfo;