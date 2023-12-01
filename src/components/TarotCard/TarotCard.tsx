import React from 'react';
import { setTokenSourceMapRange } from 'typescript';
import DescriptionModal from '../../DescriptionModal/DescriptionModal';
import { Card } from '../../types';
import './TarotCard.css'

type TarotCardProps = {
    index: number,
    step: number,
    setStep: React.Dispatch<React.SetStateAction<number>>,
    card: Card,
    layout: string,
    activeCardModal: number,
    setActiveCardModal: React.Dispatch<React.SetStateAction<number>>
}


const TarotCard: React.FC<TarotCardProps> = (props) => {
    const card = props.card
    const [faceDown, setFaceDown] = React.useState(true)

    const positionClass = props.layout + "-" + (props.index + 1)

    const handleFlip = (props: TarotCardProps) => {
        console.log(props.step)
        console.log(props.index)
        if (props.step >= props.index) {
            setFaceDown(false)
            props.setActiveCardModal(props.index)
            props.setStep(props.step + 1)
        }
    }
    return(
    <div>
        <div className={faceDown ? `cardBox cardBack ${positionClass}` : `cardBox ${positionClass}`}
            onClick={() => faceDown ? handleFlip(props) : props.setActiveCardModal(props.index)}>
            {/* (props.index == props.activeCardModal) && <DescriptionModal card={card}/> */}
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