import content from "../data/content"
import React from 'react';

import { MdKeyboardArrowRight } from 'react-icons/md';

type language = 'en' | 'fi' | 'sv'

interface PackingListProps {
    language: language;
}

interface PackingListCategoryProps {
    language: language;
    category: {
        title: {
            en: string;
            fi: string;
            sv: string;
        };
        items: {
            checkbox: boolean;
            en: string;
            fi: string;
            sv: string;
        }[];
    }
}

const PackingListCategory: React.FunctionComponent<PackingListCategoryProps> = ({language, category}: PackingListCategoryProps) => {
    return (
        <div className="packing_list_category">
            <h3>{category.title[language]}</h3>
            <ul>
                {category.items.map((item, index) => (
                    <li className="packing_list_item" key={index}>
                        {item.checkbox? 
                        <div>
                            <input className="packing_list_checkbox" type="checkbox" id="" />
                            {item[language]}
                        </div> : 
                        <div>
                            <MdKeyboardArrowRight className="packing_list_icon" />
                            {item[language]}
                        </div>
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
}

const PackingList: React.FunctionComponent<PackingListProps> = ({language}: PackingListProps) => {
    
    return (
        <div className="packing_list">
            <a className="anchor" id="packing_list"></a>

            <h2 className="subtitle">{content.packing_list.title[language]}</h2>
            <div>
                {content.packing_list.categories.map((item, index) => (
                    <PackingListCategory key={index} language={language} category={item}/>
                ))}
            </div>
        </div>
    );
}

export default PackingList; 