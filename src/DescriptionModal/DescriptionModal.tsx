import React from 'react';
import { Card } from '../types';
import './DescriptionModal.css'

type DescriptionModalProps = {
    card: Card
}

const DescriptionModal: React.FC<DescriptionModalProps> = (props) => {
    const card = props.card
    return(
    <div className='descriptionModal'>
        {card.reversed ? card.reversedDescription : card.uprightDescription}
    </div>
    )
}

export default DescriptionModal;