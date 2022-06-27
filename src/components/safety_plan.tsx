import content from "../data/content"
import React from 'react';

type language = 'en' | 'fi' | 'sv'

interface SafetyPlanProps {
    language: language;
}

const SafetyPlan: React.FunctionComponent<SafetyPlanProps> = ({language}: SafetyPlanProps) => {
    return (
        <div className="safety_plan">
            <a className="anchor" id="safety_plan"></a>

            <h2 className="subtitle">{content.safety_plan.title[language]}</h2>
        </div>
    )
}

export default SafetyPlan;