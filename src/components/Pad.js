function Pad({ DRUM_PAD, active, playSound, isOn }) {
  return (
    <div className="pad-bank">
      {DRUM_PAD.map((item) => {
        return (
          <div
            className={
              isOn
                ? active === item.id
                  ? "drum-pad active"
                  : "drum-pad light-on"
                : "drum-pad"
            }
            key={item.id}
            id={item.id}
            onClick={() => isOn && playSound({ ...item })}
          >
            <audio src={item.srcAudio} id={item.key} className="clip"></audio>
            {item.key}
          </div>
        );
      })}
    </div>
  );
}

export default Pad;
