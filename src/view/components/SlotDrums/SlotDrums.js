import { SlotDrum } from "../SlotDrum/SlotDrum";

export const SlotDrums = (props) => {
  const { changeStatusButton, statusGame, positionX } = props;

  return (
    <>
      {positionX.map((value, index) => {
        return (
          <SlotDrum
            changeStatusButton={() => changeStatusButton()}
            statusGame={statusGame}
            position={[value, 0, 0]}
            rotation={[Math.PI, 0, Math.PI / 2]}
            key={index}
          ></SlotDrum>
        );
      })}
    </>
  );
};
