import React from 'react';
import { Card } from '../../types';
import './InfoDump.css'

type InfoDumpProps = {
    card: Card
}


const InfoDump: React.FC<InfoDumpProps> = (props) => {
    const card = props.card
    const title = card.reversed ? card.name + " (Reversed) " : card.name
    const description = card.reversed ? card.reversedDescription : card.uprightDescription
    const tags = card.reversed ? card.reverseCardTags : card.uprightCardTags
    return (
        <div className='infoDump'>
            <h1>{title}</h1>
            <h2> Description </h2>
            <p>{description}</p>
            <h2> Associations </h2>
            <p>{tags.join(", ")}</p>
        </div>
    )
}

export default InfoDump;