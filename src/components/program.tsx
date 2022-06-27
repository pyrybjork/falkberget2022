import content from "../data/content"
import React from 'react';

type language = 'en' | 'fi' | 'sv'

interface ProgramProps {
    language: language;
}

const Program: React.FunctionComponent<ProgramProps> = ({language}: ProgramProps) => {
    return (
        <div className="program">
            <a className="anchor" id="program"></a>

            <h2 className="subtitle">{content.program.title[language]}</h2>
        </div>
    )
}

export default Program;