import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Pad from "./components/Pad";

const DRUM_PAD = [
  {
    id: "Heater-1",
    key: "Q",
    srcAudio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    id: "Heater-2",
    key: "W",
    srcAudio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    id: "Heater-3",
    key: "E",
    srcAudio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    id: "Heater-4",
    key: "A",
    srcAudio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    id: "Clap",
    key: "S",
    srcAudio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    id: "Open-HH",
    key: "D",
    srcAudio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    id: "Kick-n'-Hat",
    key: "Z",
    srcAudio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    id: "Kick",
    key: "X",
    srcAudio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    id: "Closed-HH",
    key: "C",
    srcAudio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function App() {
  const [isOn, setIsOn] = useState(true);
  const [display, setDisplay] = useState("");
  const [active, setActive] = useState("");
  const [volume, setVolume] = useState("1");

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  useEffect(() => {
    const timeoutActive = setTimeout(() => {
      setActive("");
    }, 250);
    return () => {
      clearTimeout(timeoutActive);
    };
  }, [active]);

  useEffect(() => {
    const timeoutDisplay = setTimeout(() => {
      setDisplay("");
    }, 1500);
    return () => {
      clearTimeout(timeoutDisplay);
    };
  }, [display]);

  const handleKeyPress = (e) => {
    const item = DRUM_PAD.find((item) => item.key === e.key.toUpperCase());
    item && playSound({ ...item });
  };

  const changeVolume = (e) => {
    setVolume(e.target.value);
    setDisplay(`Volume: ${Math.round(e.target.value * 100)}%`);
  };

  const playSound = ({ id, key }) => {
    const audio = document.getElementById(key);
    setDisplay(id);
    setActive(id);
    audio.currentTime = 0;
    audio.volume = volume;
    audio.play();
  };
  return (
    <div className="container" id="drum-machine">
      <h2>Drum Machine</h2>
      <Pad
        DRUM_PAD={DRUM_PAD}
        active={active}
        playSound={playSound}
        isOn={isOn}
      />
      <Controls
        volume={volume}
        display={display}
        changeVolume={changeVolume}
        setIsOn={setIsOn}
        isOn={isOn}
      />
    </div>
  );
}

export default App;
