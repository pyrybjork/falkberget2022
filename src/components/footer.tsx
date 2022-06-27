import content from "../data/content"
import React from 'react';

type language = 'en' | 'fi' | 'sv'

interface FooterProps {
    language: language;
}

const Footer: React.FunctionComponent<FooterProps> = ({language}: FooterProps) => {
    return (
        <div className="footer">
            <hr />
            <br />
        </div>
    )
}

export default Footer;