import React from 'react';
import DescriptionModal from '../../DescriptionModal/DescriptionModal';
import { Card } from '../../types';
import './TarotCard.css'

type TarotCardProps = {
    index: number,
    card: Card,
    activeCardModal: number,
    setActiveCardModal: React.Dispatch<React.SetStateAction<number>>
}


const TarotCard: React.FC<TarotCardProps> = (props) => {
    const card = props.card
    const [faceDown, setFaceDown] = React.useState(true)
    console.log(props)
    return(
    <div>
        <div className={faceDown ? 'cardBox cardBack' : 'cardBox'}
            onClick={() => faceDown ? setFaceDown(false) : props.setActiveCardModal(props.index)}>
            {(props.index == props.activeCardModal) && <DescriptionModal card={card}/>}
            {!faceDown && (
            <div className={card.reversed ? 'cardFace upsideDown' : 'cardFace'}>
                {card.name}
            </div>
            )}
        </div>
    </div>
    )
}

export default TarotCard;