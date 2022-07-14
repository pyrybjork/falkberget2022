import content from "../data/content"
import React from 'react';

import { MdKeyboardArrowRight } from 'react-icons/md';

type language = 'en' | 'fi' | 'sv'

interface ProgramProps {
    language: language;
}

interface ProgramDayProps {
    language: language;
    program_day: {
        title: {
            en: string;
            fi: string;
            sv: string;
        };
        events: {
            time: string;
            en: string;
            fi: string;
            sv: string;
        }[];
    }
}

const ProgramDay: React.FunctionComponent<ProgramDayProps> = ({language, program_day}: ProgramDayProps) => {
    return (
        <div className="program_day">
            <h3>{program_day.title[language]}</h3>
            <div className="program_day_content">
                <ul>
                    {program_day.events.map((item, index) => (
                        <li className="program_event" key={index}>
                            <div className="program_time">
                                <b>
                                    {item.time !== "ARROW"?
                                         item.time :
                                        <MdKeyboardArrowRight className="program_icon" />
                                    }
                                </b>
                            </div>
                            {item[language]}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const Program: React.FunctionComponent<ProgramProps> = ({language}: ProgramProps) => {
    return (
        <div className="program">
            <a className="anchor" id="program"></a>

            <h2 className="subtitle">{content.program.title[language]}</h2>

            <div>
                {content.program.days.map((item, index) => (
                    <ProgramDay key={index} language={language} program_day={item}/>
                ))}
            </div>
        </div>
    )
}

export default Program;

