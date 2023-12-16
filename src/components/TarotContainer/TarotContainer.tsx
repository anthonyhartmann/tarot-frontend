import React from "react";
import { Card } from "../../types";
import { Box, Checkbox } from "@mui/material";

import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
type TarotContainerProps = {
  cards: JSX.Element[];
};

const TarotContainer: React.FC<TarotContainerProps> = (props) => {
  const cards = props.cards;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {cards[4]}
      </Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "100%",
          marginLeft: "5%",
          marginRight: "5%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "39%",
            left: 0,
            transform: "rotate(-90deg)",
            zIndex: 2,
          }}
        >
          {cards[1]}
        </Box>
        {cards[2]}
        {cards[0]}
        {cards[3]}
      </Box>
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {cards[5]}
      </Box>
      <Box sx={{ width: "15%" }} />
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {cards[6]}
        {cards[7]}
        {cards[8]}
        {cards[9]}
      </Box>
    </Box>
  );
};

export default TarotContainer;
