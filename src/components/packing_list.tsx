import content from "../data/content"
import React, { useState } from 'react';

type language = 'en' | 'fi'

interface PackingListProps {
    language: language;
}

interface PackingListCategoryProps {
    language: language;
    category: {
        title: {
            en: string;
            fi: string;
        };
        items: {
            en: string;
            fi: string;
        }[];
    }
}

const PackingListCategory: React.FunctionComponent<PackingListCategoryProps> = ({language, category}: PackingListCategoryProps) => {
    return (
        <div className="packing_list_category">
            <h3>{category.title[language]}</h3>
            <ul>
                {category.items.map((item, index) => (
                    <li key={index}>{item[language]}</li>
                ))}
            </ul>
        </div>
    );
}

const PackingList: React.FunctionComponent<PackingListProps> = ({language}: PackingListProps) => {
    
    return (
        <div className="packing_list">
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