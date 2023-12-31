import React from "react";
import { Card } from "../../types";
import CloseIcon from "@mui/icons-material/Close";
import "./InfoDump.css";

type InfoDumpProps = {
  card: Card | null;
  visible: boolean;
  onClose: () => void;
};

const InfoDump: React.FC<InfoDumpProps> = (props) => {
  const card = props.card;
  let title: string = "";
  let description: string = "";
  let tags: string[] = [];
  if (card) {
    title = card.reversed ? card.name + " (Reversed) " : card.name;
    description = card.reversed
      ? card.reversedDescription
      : card.uprightDescription;
    tags = card.reversed ? card.reverseCardTags : card.uprightCardTags;
  }
  return (
    <div
      className={"infoBox"}
      style={
        props.visible
          ? {
              width: "100%",
            }
          : {
              padding: 0,
              width: 0,
            }
      }
    >
      <CloseIcon
        onClick={props.onClose}
        style={{ color: "#7e4747", marginTop: "1em", float: "right" }}
        fontSize="large"
      />
      <h1>{title}</h1>
      <h2> Description </h2>
      <p>{description}</p>
      <h2> Associations </h2>
      <p>{tags.join(", ")}</p>
    </div>
  );
};

export default InfoDump;
