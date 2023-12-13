import { url } from "inspector";
import React from "react";
import { setTokenSourceMapRange } from "typescript";
import DescriptionModal from "../../DescriptionModal/DescriptionModal";
import { Card } from "../../types";
import "./TarotCard.css";

type TarotCardProps = {
  index: number;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  card: Card;
  layout: string;
  activeCardModal: number;
  setActiveCardModal: React.Dispatch<React.SetStateAction<number>>;
};

const TarotCard: React.FC<TarotCardProps> = (props) => {
  const card = props.card;
  const [faceDown, setFaceDown] = React.useState(true);

  const card_img_path =
    "/images/cards/" +
    props.card.name.toLowerCase().replaceAll(" ", "_") +
    ".jpg";

  const handleFlip = (props: TarotCardProps) => {
    if (props.step >= props.index) {
      setFaceDown(false);
      props.setActiveCardModal(props.index);
      props.setStep(props.step + 1);
    }
  };

  let cardClasses = `cardBox`;
  if (faceDown) {
    cardClasses += " cardBack";
  }

  if (card.reversed) {
    cardClasses += " upsideDown";
  }

  return (
    <div
      className={cardClasses}
      style={
        faceDown
          ? { color: "green" }
          : {
              backgroundImage: `url(${card_img_path})`,
              backgroundPosition: "center",
              backgroundSize: "100%",
            }
      }
      onClick={() =>
        faceDown ? handleFlip(props) : props.setActiveCardModal(props.index)
      }
    ></div>
  );
};

export default TarotCard;
