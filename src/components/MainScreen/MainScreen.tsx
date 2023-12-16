import React, { useEffect } from "react";
import { Card } from "../../types";
import InfoDump from "../InfoDump/InfoDump";
import TarotCard from "../TarotCard/TarotCard";
import { RotatingTriangles } from "react-loader-spinner";
import "./MainScreen.css";
import TarotContainer from "../TarotContainer/TarotContainer";
import { Box, Checkbox } from "@mui/material";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";

const STEP_NUMBER_MAP = [
  "the querent",
  "the block",
  "the root",
  "the recent past",
  "possibilities",
  "where you're headed",
  "how you view yourself",
  "your environment",
  "hopes and fears",
  "the outcome",
  "the end",
];

const MainScreen: React.FC = () => {
  const [activeCardModal, setActiveCardModal] = React.useState(-1);
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState([]);
  const [layout, setLayout] = React.useState("celtic-cross");
  const [loading, setLoading] = React.useState(false);
  const [activeCard, setActiveCard] = React.useState<Card | null>(null);
  const [predictMode, setPredictMode] = React.useState<boolean>(false);
  const textMap = new Map<Number, Card>();
  useEffect(() => {
    setLoading(true);
    fetch("/data").then((res) =>
      res.json().then((data) => {
        setData(data.map((instanceData: Card) => new Card(instanceData)));
        setLoading(false);
      })
    );
  }, []);

  useEffect(() => {
    if (activeCardModal != -1) {
      setActiveCard(textMap.get(activeCardModal)!!);
    }
  }, [activeCardModal]);

  const cardData = data.map((card: Card, index: number) => {
    textMap.set(index, card);
    return (
      <TarotCard
        index={index}
        step={step}
        setStep={setStep}
        layout={layout}
        card={card}
        activeCardModal={activeCardModal}
        setActiveCardModal={setActiveCardModal}
      />
    );
  });

  return (
    <Box sx={{ height: "100vh" }}>
      {loading && (
        <RotatingTriangles
          visible={true}
          height="200"
          width="200"
          ariaLabel="rotating-triangels-loading"
          wrapperStyle={{ position: "absolute", top: "40%", left: "45%" }}
        />
      )}
      {!loading && (
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <div className="head">
            {"Step " + step + ":\n" + STEP_NUMBER_MAP[step]}
          </div>
          <div
            style={{
              alignSelf: "flex-end",
              marginLeft: ".5em",
              marginBottom: "0px",
              color: "#b59e19",
            }}
          >
            Predict Mode
            <Checkbox
              onChange={(event) => setPredictMode(event.target.checked)}
              sx={{ marginTop: "0px" }}
              icon={<ToggleOffIcon sx={{ fontSize: "4em" }} />}
              checkedIcon={
                <ToggleOnIcon sx={{ fontSize: "4em", color: "#b59e19" }} />
              }
            />
          </div>
          <TarotContainer cards={cardData} />
          <InfoDump
            predictMode={predictMode}
            visible={activeCardModal != -1}
            card={activeCard}
            onClose={() => setActiveCardModal(-1)}
          />
        </Box>
      )}
    </Box>
  );
};

export default MainScreen;
