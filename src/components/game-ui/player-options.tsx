import { ArrowUp, Check, DoorOpen, SkipForward } from "lucide-react";
import React from "react";
import { type Sun_Card, type Moon_Card } from "~/utils/classes";

export const PlayerOptions: React.FC<{
  playerTurn: string;
  isCurrentPlayersTurn: boolean;
  userActive: boolean;
  userStand: () => void;
  playerLeave: () => Promise<void>;
  selectingACard: boolean;
  onConfirmNewCardSelection: () => void;
  cardSelecting?: Sun_Card | Moon_Card;
}> = ({
  isCurrentPlayersTurn,
  userActive,
  userStand,
  playerLeave,
  selectingACard,
  cardSelecting,
  onConfirmNewCardSelection
}) => {
    return (
      <div className={`flex flex-col justify-center gap-4 border-2 p-1 ${userActive ? "border-[#9dfaee]" : "border-black"} bg-[#302d25] rounded-lg`}>
        <p className="text-[#9dfaee] text-center">
          {
            isCurrentPlayersTurn ? "Your turn" : "Opponent's turn"
          }
        </p>
        <button
          className="bg-[#8e8377] text-[#f5f5f5] btn"
          onClick={() => {
            onConfirmNewCardSelection();
          }}
        >
          {
            !selectingACard ? <>
              <ArrowUp /> Select a card
            </> : <>
              <Check /> Confirm selection of {cardSelecting}
            </>
          }
        </button>
        <button
          onClick={userStand}
          className="bg-[#8e8377] text-[#f5f5f5] btn"
        >
          <SkipForward />
          Stand
        </button>
        <button
          onClick={async () => {
            await playerLeave();
          }}
          className="bg-[#8e8377] text-[#f5f5f5] btn"
        >
          <DoorOpen /> Leave
        </button>
      </div>
    );
  };
