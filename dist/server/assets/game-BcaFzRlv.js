import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRouter } from "@tanstack/react-router";
import { StepForward, ArrowUp, Check, SkipForward, DoorOpen, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import * as React from "react";
import React__default from "react";
const Token = ({
  total
}) => {
  return /* @__PURE__ */ jsx("div", { className: "tooltip tooltip-bottom tooltip-primary", "data-tip": `Tokens: ${total}`, children: /* @__PURE__ */ jsxs(motion.div, { className: "flex flex-col", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "flex flex-row gap-1 cursor-pointer",
        initial: { scale: 0 },
        animate: { scale: 1 },
        drag: true,
        whileHover: { scale: 1.1 },
        whileDrag: { scale: 1.2 },
        dragMomentum: false,
        dragConstraints: { top: 0, left: 0, right: 0, bottom: 0 },
        transition: { duration: 0.5 },
        children: /* @__PURE__ */ jsx("img", { src: "/deck/token.png", alt: "token", className: "w-32 h-32 unselectable" })
      }
    ),
    /* @__PURE__ */ jsxs("p", { className: "font-bold mt-2", children: [
      "Tokens: ",
      total
    ] })
  ] }) });
};
const Card = ({
  card,
  locked,
  deck_card = false,
  _ref,
  onClickDeckCards,
  onClickOnSelectingCard
}) => {
  const [hovering, setHovering] = React__default.useState(false);
  const backgroundImagePaths = {
    "sun_1": "/deck/sand/1_sand.png",
    "sun_2": "/deck/sand/1_sand.png",
    "sun_3": "/deck/sand/3_sand.png",
    "sun_4": "/deck/sand/4_sand.png",
    "sun_5": "/deck/sand/5_sand.png",
    "sun_6": "/deck/sand/6_sand.png",
    "sun_imposter": "/deck/sand/imposter_sand.png",
    "sun_sylop": "/deck/sand/sylop_sand.png",
    "sun_back": "/deck/sand/back_sand.png",
    "moon_1": "/deck/sun/1_sun.png",
    "moon_2": "/deck/sun/2_sun.png",
    "moon_3": "/deck/sun/3_sun.png",
    "moon_4": "/deck/sun/4_sun.png",
    "moon_5": "/deck/sun/5_sun.png",
    "moon_6": "/deck/sun/6_sun.png",
    "moon_imposter": "/deck/sun/imposter_sun.png",
    "moon_sylop": "/deck/sun/sylop_sun.png",
    "moon_back": "/deck/sun/back_sun.png"
  };
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      ref: _ref,
      drag: locked ? false : true,
      whileHover: { scale: locked ? 1 : 1.1 },
      onHoverStart: () => {
        setHovering(true);
      },
      onHoverEnd: () => {
        setHovering(false);
      },
      whileDrag: { scale: locked ? 1 : 1.2 },
      dragMomentum: false,
      dragConstraints: { top: 0, left: 0, right: 0, bottom: 0 },
      className: "w-36 h-38 cursor-pointer object-cover flex flex-col justify-center items-center",
      onClick: () => {
        if (onClickDeckCards) onClickDeckCards();
        if (onClickOnSelectingCard) {
          onClickOnSelectingCard(
            card ?? "moon_back"
          );
        }
      },
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: backgroundImagePaths[card ?? "moon_back"] ?? "/deck/sand/back_sand.png",
            width: 120,
            height: 100,
            alt: "card",
            className: "unselectable"
          }
        ),
        deck_card && /* @__PURE__ */ jsx(StepForward, { size: 32, className: "rotate-[270deg]", color: hovering ? "#9dfaee" : "white" })
      ]
    }
  );
};
const UserCards = ({ userHand, onClickOnSelectingCard }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-4 relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute left-14 rotate-[10deg]", children: /* @__PURE__ */ jsx(Card, { card: userHand.card_sun, onClickOnSelectingCard }) }),
    /* @__PURE__ */ jsx("div", { className: "rotate-[-10deg]", children: /* @__PURE__ */ jsx(Card, { card: userHand.card_moon, onClickOnSelectingCard }) })
  ] });
};
const Deck = ({
  openMoonCard,
  openSunCard,
  onClickDeckCards,
  onClickOpenCards,
  refOpenMoonCardComponent,
  refOpenSunCardComponent,
  refDeckSunCardComponent,
  refDeckMoonCardComponent
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-4 bg-slate-500 rounded-lg p-1", children: [
    /* @__PURE__ */ jsx(Card, { card: openMoonCard, deck_card: true, _ref: refOpenMoonCardComponent, onClickOnSelectingCard: () => {
      onClickOpenCards(false, true);
    } }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 flex flex-row", children: [
      /* @__PURE__ */ jsx(
        Card,
        {
          card: "moon_back",
          deck_card: true,
          _ref: refDeckMoonCardComponent,
          onClickDeckCards: () => onClickDeckCards(false, true)
        }
      ),
      /* @__PURE__ */ jsx(
        Card,
        {
          card: "sun_back",
          deck_card: true,
          _ref: refDeckSunCardComponent,
          onClickDeckCards: () => onClickDeckCards(true, false)
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Card, { card: openSunCard, deck_card: true, _ref: refOpenSunCardComponent, onClickOnSelectingCard: () => {
      onClickOpenCards(true, false);
    } })
  ] });
};
const OpponentCards = ({
  side,
  hand,
  isCurrentPlayerTurn,
  playerLeft
}) => {
  const rotate = {
    left: "rotate-[90deg]",
    right: "rotate-[-90deg]",
    top: "rotate-[180deg]",
    bottom: ""
  };
  const border = isCurrentPlayerTurn && !playerLeft ? "border-[#9dfaee]" : "border-[#000000]";
  const cardSun = playerLeft ? "sun_back" : hand?.card_sun ?? "sun_back";
  const cardMoon = playerLeft ? "moon_back" : hand?.card_moon ?? "moon_back";
  return /* @__PURE__ */ jsxs("div", { className: `flex flex-row gap-4 border-2 ${border} p-8 bg-[#808b5e] relative ${rotate[side]} rounded-lg`, children: [
    /* @__PURE__ */ jsx("div", { className: "absolute left-14 rotate-[10deg]", children: /* @__PURE__ */ jsx(
      Card,
      {
        card: cardSun
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "rotate-[-10deg]", children: /* @__PURE__ */ jsx(
      Card,
      {
        card: cardMoon
      }
    ) })
  ] });
};
const nextPlayer_clockwise = {
  "bottom": "right",
  "right": "top",
  "top": "left",
  "left": "bottom"
};
const nextPlayer_counter_clockwise = {
  "bottom": "left",
  "left": "top",
  "top": "right",
  "right": "bottom"
};
const sun_cards = [
  "sun_1",
  "sun_2",
  "sun_3",
  "sun_4",
  "sun_5",
  "sun_6",
  "sun_1",
  "sun_2",
  "sun_3",
  "sun_4",
  "sun_5",
  "sun_6",
  "sun_1",
  "sun_2",
  "sun_3",
  "sun_4",
  "sun_5",
  "sun_6",
  "sun_imposter",
  "sun_imposter",
  "sun_imposter",
  "sun_sylop"
];
const moon_cards = [
  "moon_1",
  "moon_2",
  "moon_3",
  "moon_4",
  "moon_5",
  "moon_6",
  "moon_1",
  "moon_2",
  "moon_3",
  "moon_4",
  "moon_5",
  "moon_6",
  "moon_1",
  "moon_2",
  "moon_3",
  "moon_4",
  "moon_5",
  "moon_6",
  "moon_imposter",
  "moon_imposter",
  "moon_imposter",
  "moon_sylop"
];
function useGameManager() {
  const [table, setTable] = React.useState(null);
  useRouter();
  const startGame = () => {
    const table2 = {
      table_name: "",
      table_id: 123,
      table_creator_id: "1",
      table_creator_name: "Player 1",
      table_password: "",
      table_password_protected: false,
      turn: 1,
      max_turns: 3,
      round: 1,
      moves: [],
      pot: [],
      rotation_direction: "clockwise",
      game_state: "playing",
      deck_sun: [],
      deck_moon: [],
      open_cards_sun: [],
      open_cards_moon: [],
      user_hands_state: [],
      start_player_id: "1",
      end_player_id: "1",
      players: [
        { player_id: "1", player_name: "Player 1", position: "bottom" },
        { player_id: "2", player_name: "Player 2", position: "left" },
        { player_id: "3", player_name: "Player 3", position: "top" },
        { player_id: "4", player_name: "Player 4", position: "right" }
      ],
      current_users_turn_id: "1",
      round_winners: []
    };
    const sunCard = shuffleDeck([...sun_cards]);
    const moonCard = shuffleDeck([...moon_cards]);
    const playerHands = [];
    let playerIndex = table2.players.findIndex((player) => player.player_id === table2.start_player_id);
    for (let i = 0; i < table2.players.length; i++) {
      const player = table2.players[playerIndex];
      if (!player) {
        console.log("Player not found", playerIndex);
        continue;
      }
      const starting_sunCard = sunCard.pop();
      const starting_moonCard = moonCard.pop();
      if (!starting_sunCard || !starting_moonCard) {
        throw new Error("Not enough cards");
      }
      const userHand = {
        player_id: player.player_id,
        player_name: player.player_name,
        tokens: 7,
        hand: {
          card_sun: starting_sunCard,
          card_moon: starting_moonCard
        },
        position: player.position
      };
      playerHands.push(userHand);
      const orientation = table2.rotation_direction === "clockwise" ? nextPlayer_clockwise : nextPlayer_counter_clockwise;
      const nextPlayerToFind = orientation[player.position];
      playerIndex = table2.players.findIndex((player2) => player2.position === nextPlayerToFind);
    }
    const reverse_orientation = table2.rotation_direction !== "clockwise" ? nextPlayer_clockwise : nextPlayer_counter_clockwise;
    const findLastPlayer = reverse_orientation[table2?.players[0]?.position ?? "bottom"];
    const lastPlayer = table2.players.find((player) => player.position === findLastPlayer);
    table2.end_player_id = lastPlayer?.player_id ?? "1";
    table2.user_hands_state = playerHands;
    const openCardSun = sunCard.pop();
    const openCardMoon = moonCard.pop();
    if (!openCardSun || !openCardMoon) {
      throw new Error("Not enough cards");
    }
    table2.open_cards_moon = [openCardMoon];
    table2.open_cards_sun = [openCardSun];
    table2.deck_sun = sunCard;
    table2.deck_moon = moonCard;
    setTable(table2);
    console.log(table2);
  };
  const shuffleDeck = (deck) => {
    const shuffledDeck = deck.sort(() => Math.random() - 0.5);
    return shuffledDeck;
  };
  const searchForNextPlayer = (rotation, position, _table) => {
    const orientation = rotation === "clockwise" ? nextPlayer_clockwise : nextPlayer_counter_clockwise;
    let nextPlayerToFind = orientation[position];
    let nextPlayer = _table.players.find((player) => player.position === nextPlayerToFind);
    if (!nextPlayer) {
      let passes = 0;
      while (!nextPlayer && passes < 4) {
        nextPlayerToFind = orientation[nextPlayerToFind];
        nextPlayer = _table.players.find((player) => player.position === nextPlayerToFind);
        passes++;
      }
    }
    return nextPlayer ?? null;
  };
  const incrementTurn = (playerId) => {
    if (!table) {
      alert("Table not found");
      return 0;
    }
    let turn = table.turn;
    if (table.end_player_id === playerId) {
      turn++;
    }
    return turn;
  };
  const peekDeck = (from) => {
    const deck = from === "sun" ? table?.deck_sun : table?.deck_moon;
    if (!deck) {
      return null;
    }
    return deck[deck.length - 1] ?? null;
  };
  const userStand = (player_id) => {
    if (!table) {
      alert("Table not found");
      return;
    }
    const copyTable = { ...table };
    const userHand = table.user_hands_state.find((hand) => hand.player_id === player_id);
    if (!userHand) {
      console.log("User hand not found");
      return;
    }
    const move = {
      player_id: userHand.player_id,
      prev_card_sun: userHand.hand.card_sun,
      prev_card_moon: userHand.hand.card_moon,
      new_card_sun: null,
      new_card_moon: null,
      action: "stand",
      turn: copyTable.turn,
      round: table.round,
      tokens: userHand.tokens,
      new_tokens: userHand.tokens,
      timestamp: (/* @__PURE__ */ new Date()).getTime()
    };
    const turn = incrementTurn(player_id);
    copyTable.turn = turn;
    copyTable.moves.push(move);
    const nextPlayer = searchForNextPlayer(copyTable.rotation_direction, userHand.position, copyTable);
    if (!nextPlayer) {
      console.log("Next player not found");
      return;
    }
    copyTable.current_users_turn_id = nextPlayer.player_id;
    setTable(copyTable);
  };
  const playerLeave = async (userId) => {
    if (!table) {
      alert("Table not found");
      return;
    }
    const copyTable = { ...table };
    const playerIndex = copyTable?.players?.findIndex((player) => player.player_id === userId);
    if (playerIndex === -1 || playerIndex === void 0) {
      console.log("Player not found");
      return;
    }
    const playerPosition = copyTable?.players[playerIndex]?.position ?? "bottom";
    const findNextPlayer = searchForNextPlayer(copyTable.rotation_direction, playerPosition, copyTable);
    if (!findNextPlayer) {
      alert("Next player not found");
      return;
    }
    copyTable.current_users_turn_id = findNextPlayer?.player_id;
    if (copyTable.end_player_id === userId) {
      const turn = incrementTurn(userId);
      copyTable.turn = turn;
      copyTable.end_player_id = findNextPlayer?.player_id;
    }
    copyTable.players = copyTable?.players?.filter((player) => player.player_id !== userId);
    copyTable.user_hands_state = copyTable?.user_hands_state?.filter((hand) => hand.player_id !== userId);
    if (copyTable?.players?.length === 0) {
      endGame();
    }
    setTable(copyTable);
  };
  const onConfirmNewCardSelection = (player_id, from, chosen) => {
    if (!table) {
      alert("Table not found");
      return;
    }
    const copyTable = { ...table };
    const userHand = copyTable.user_hands_state.find((hand) => hand.player_id === player_id);
    if (!userHand) {
      alert("User hand not found");
      return;
    }
    let newCardSun = null;
    let newCardMoon = null;
    if (chosen === "deck_sun" || chosen === "deck_moon" || chosen === "open_moon" || chosen === "open_sun") {
      const checktype = chosen === "deck_sun" || chosen === "open_sun";
      const card = checktype ? userHand.hand.card_sun : userHand.hand.card_moon;
      if (chosen === "deck_moon" || chosen === "deck_sun") {
        newCardMoon = chosen === "deck_moon" ? copyTable.deck_moon.pop() ?? null : null;
        newCardSun = from === "deck_sun" ? copyTable.deck_sun.pop() ?? null : null;
      } else if (chosen === "open_moon" || chosen === "open_sun") {
        newCardMoon = chosen === "open_moon" ? copyTable.open_cards_moon.pop() ?? null : null;
        newCardSun = chosen === "open_sun" ? copyTable.open_cards_sun.pop() ?? null : null;
      }
      copyTable[checktype ? "open_cards_sun" : "open_cards_moon"].push(card);
    } else if (chosen === "hand_sun" || chosen === "hand_moon") {
      let card = null;
      if (chosen === "hand_sun" && from === "deck_sun") {
        card = from === "deck_sun" ? copyTable.deck_sun.pop() ?? null : null;
      } else if (chosen === "hand_moon" && from === "deck_moon") {
        card = from === "deck_moon" ? copyTable.deck_moon.pop() ?? null : null;
      } else {
        card = chosen === "hand_sun" ? copyTable.open_cards_sun.pop() ?? null : copyTable.open_cards_moon.pop() ?? null;
      }
      copyTable[chosen === "hand_sun" ? "open_cards_sun" : "open_cards_moon"].push(card);
    }
    const move = {
      player_id,
      prev_card_sun: userHand.hand.card_sun,
      prev_card_moon: userHand.hand.card_moon,
      new_card_sun: newCardSun ?? null,
      new_card_moon: newCardMoon ?? null,
      action: from === "deck_sun" || from === "deck_moon" ? "select_new_card" : "select_open_card",
      turn: table.turn,
      round: table.round,
      tokens: 0,
      new_tokens: 1,
      timestamp: (/* @__PURE__ */ new Date()).getTime()
    };
    copyTable.user_hands_state = copyTable.user_hands_state.map((hand) => {
      if (hand.player_id === player_id) {
        return {
          ...hand,
          hand: {
            card_sun: newCardSun ?? hand.hand.card_sun,
            card_moon: newCardMoon ?? hand.hand.card_moon
          },
          tokens: hand.tokens - 1
        };
      }
      return hand;
    });
    copyTable.moves.push(move);
    const nextPlayer = searchForNextPlayer(copyTable.rotation_direction, userHand?.position ?? "bottom", copyTable);
    if (!nextPlayer) {
      console.log("Next player not found");
      return;
    }
    const turn = incrementTurn(player_id);
    copyTable.turn = turn;
    copyTable.current_users_turn_id = nextPlayer.player_id;
    setTable(copyTable);
  };
  const endGame = () => {
    console.log("Game ended");
  };
  return { table, startGame, userStand, playerLeave, onConfirmNewCardSelection, peekDeck };
}
const PlayerOptions = ({
  isCurrentPlayersTurn,
  userActive,
  userStand,
  playerLeave,
  selectingACard,
  cardSelecting,
  onConfirmNewCardSelection
}) => {
  return /* @__PURE__ */ jsxs("div", { className: `flex flex-col justify-center gap-4 border-2 ${userActive ? "border-[#9dfaee]" : "border-black"} p-4 bg-[#302d25] rounded-lg`, children: [
    /* @__PURE__ */ jsx("p", { className: "text-[#9dfaee] text-center", children: isCurrentPlayersTurn ? "Your turn" : "Opponent's turn" }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "bg-[#8e8377] text-[#f5f5f5] btn",
        onClick: () => {
          onConfirmNewCardSelection();
        },
        children: !selectingACard ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(ArrowUp, {}),
          " Select a card"
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Check, {}),
          " Confirm selection of ",
          cardSelecting
        ] })
      }
    ),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: userStand,
        className: "bg-[#8e8377] text-[#f5f5f5] btn",
        children: [
          /* @__PURE__ */ jsx(SkipForward, {}),
          "Stand"
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: async () => {
          await playerLeave();
        },
        className: "bg-[#8e8377] text-[#f5f5f5] btn",
        children: [
          /* @__PURE__ */ jsx(DoorOpen, {}),
          " Leave"
        ]
      }
    )
  ] });
};
const onClickDeckMoveFreeCardToDeckCard = (cardToHover, refDeckSunCardComponent, refDeckMoonCardComponent, freeCardRef) => {
  let rect = { top: 0, left: 0, right: 0, bottom: 0 };
  switch (cardToHover) {
    case "deck_sun_card":
      if (refDeckSunCardComponent.current) rect = refDeckSunCardComponent.current.getBoundingClientRect();
      break;
    case "deck_moon_card":
      if (refDeckMoonCardComponent.current) rect = refDeckMoonCardComponent.current.getBoundingClientRect();
      break;
    default:
      alert("Invalid card to hover");
  }
  if (freeCardRef.current) {
    freeCardRef.current.style.top = `${rect.top + 12.5}px`;
    freeCardRef.current.style.left = `${rect.left + 8}px`;
    freeCardRef.current.style.right = `${rect.right}px`;
    freeCardRef.current.style.bottom = `${rect.bottom}px`;
    freeCardRef.current.style.display = "";
  } else {
    alert("Free card ref not found");
  }
};
const freeCardHideAndOutOfWindowView = (freeCardRef) => {
  if (freeCardRef.current) {
    freeCardRef.current.style.display = "none";
    freeCardRef.current.style.top = "-1000px";
    freeCardRef.current.style.left = "-1000px";
    freeCardRef.current.style.right = "-1000px";
    freeCardRef.current.style.bottom = "-1000px";
  } else {
    alert("Free card ref not found");
  }
};
const imageStyle = {
  backgroundImage: "url(/deck/table.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundColor: "rgba(255,255,255,0.3)",
  backgroundBlendMode: "lighten"
};
function Home() {
  const router = useRouter();
  const id = "12";
  const {
    startGame,
    table,
    userStand,
    playerLeave,
    onConfirmNewCardSelection
  } = useGameManager();
  const userActive = table?.current_users_turn_id === "1";
  const [cardRefs] = React__default.useState({
    refOpenMoonCardComponent: React__default.useRef(null),
    refOpenSunCardComponent: React__default.useRef(null),
    refDeckSunCardComponent: React__default.useRef(null),
    refDeckMoonCardComponent: React__default.useRef(null),
    refUserSunCardComponent: React__default.useRef(null),
    refUserMoonCardComponent: React__default.useRef(null),
    freeCardRef: React__default.useRef(null)
  });
  const [userView, setUserView] = React__default.useState({
    from: null,
    chosen: null,
    selectingCard: false,
    cardChosen: null
  });
  return /* @__PURE__ */ jsxs("div", { className: "overflow-hidden bg-[#a17c3d]", style: imageStyle, children: [
    /* @__PURE__ */ jsx("button", { className: "fixed top-5 left-5", onClick: async () => {
      await router.navigate({
        to: "/dashboard"
      });
    }, children: /* @__PURE__ */ jsx(ArrowLeft, { size: 64 }) }),
    /* @__PURE__ */ jsxs("div", { className: "fixed top-5 left-[5rem] border-[#9dfaee] p-4 bg-[#302d25] h-24 w-80 rounded-xl", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[#9dfaee] text-start flex justify-between w-full", children: /* @__PURE__ */ jsxs("div", { children: [
        " Scoreboard ",
        id,
        "    "
      ] }) }),
      /* @__PURE__ */ jsx("hr", { className: "bg-[#9dfaee] h-[2px]" }),
      table?.round === 3 ? /* @__PURE__ */ jsx(Fragment, { children: "Results:" }) : /* @__PURE__ */ jsx(Fragment, {})
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "fixed top-5 right-[5rem] border-[#9dfaee] p-4 bg-[#302d25] h-24 w-80 rounded-xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-[#9dfaee] text-start flex justify-between w-full", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          " Table ID: ",
          id,
          "    "
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          " Turn ",
          table?.turn ?? 0,
          " / ",
          table?.max_turns ?? 0,
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsx("hr", { className: "bg-[#9dfaee] h-[2px]" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Round ",
        table?.round ?? 0
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Players turn: ",
        table?.current_users_turn_id ?? 0
      ] })
    ] }),
    table ? /* @__PURE__ */ jsx("div", { className: "flex w-[100vw] h-[100vh] items-center justify-center content-center overflow", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 p-4 w-[100vw] h-[100vh] items-center justify-start rounded-lg overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        OpponentCards,
        {
          side: "top",
          playerLeft: !table.players.find((p) => p.player_id === "3"),
          isCurrentPlayerTurn: table.current_users_turn_id === "3",
          hand: table.user_hands_state.find((p) => p.position === "top")?.hand
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-around w-full", children: [
        /* @__PURE__ */ jsx(
          OpponentCards,
          {
            side: "left",
            playerLeft: !table.players.find((p) => p.player_id === "2"),
            isCurrentPlayerTurn: table.current_users_turn_id === "2",
            hand: table.user_hands_state.find((p) => p.position === "left")?.hand
          }
        ),
        /* @__PURE__ */ jsx(
          Deck,
          {
            refOpenMoonCardComponent: cardRefs.refOpenMoonCardComponent,
            refOpenSunCardComponent: cardRefs.refOpenSunCardComponent,
            refDeckSunCardComponent: cardRefs.refDeckSunCardComponent,
            refDeckMoonCardComponent: cardRefs.refDeckMoonCardComponent,
            openMoonCard: table.open_cards_moon[table.open_cards_moon.length - 1] ?? "moon_back",
            openSunCard: table.open_cards_sun[table.open_cards_sun.length - 1] ?? "sun_back",
            onClickDeckCards: (sun, moon) => {
              if (userView.from === "deck_sun" || userView.from === "deck_moon") {
                alert("You are already selecting a card");
                return;
              }
              if (sun) {
                onClickDeckMoveFreeCardToDeckCard(
                  "deck_sun_card",
                  cardRefs.refDeckSunCardComponent,
                  cardRefs.refDeckMoonCardComponent,
                  cardRefs.freeCardRef
                );
                setUserView((prev) => ({
                  ...prev,
                  from: "deck_sun",
                  chosen: "deck_sun",
                  cardChosen: table.deck_sun[table.deck_sun.length - 1] ?? "sun_back",
                  selectingCard: true
                }));
              } else if (moon) {
                onClickDeckMoveFreeCardToDeckCard(
                  "deck_moon_card",
                  cardRefs.refDeckSunCardComponent,
                  cardRefs.refDeckMoonCardComponent,
                  cardRefs.freeCardRef
                );
                setUserView((prev) => ({
                  ...prev,
                  from: "deck_moon",
                  chosen: "deck_moon",
                  cardChosen: table.deck_moon[table.deck_moon.length - 1] ?? "moon_back",
                  selectingCard: true
                }));
              }
            },
            onClickOpenCards: (sun, moon) => {
              if (userView.from === "deck_moon" || userView.from === "deck_sun") {
                alert("You are already selecting a card");
                return;
              }
              if (sun) {
                setUserView((prev) => ({
                  ...prev,
                  from: "open_sun",
                  chosen: "open_sun",
                  selectingCard: true,
                  cardChosen: table.open_cards_sun[table.open_cards_sun.length - 1] ?? "sun_back"
                }));
              } else if (moon) {
                setUserView((prev) => ({
                  ...prev,
                  from: "open_moon",
                  chosen: "open_moon",
                  selectingCard: true,
                  cardChosen: table.open_cards_moon[table.open_cards_moon.length - 1] ?? "moon_back"
                }));
              }
            }
          }
        ),
        /* @__PURE__ */ jsx(
          OpponentCards,
          {
            side: "right",
            playerLeft: !table.players.find((p) => p.player_id === "4"),
            isCurrentPlayerTurn: table.current_users_turn_id === "4",
            hand: table.user_hands_state.find((p) => p.position === "right")?.hand
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-4 mt-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: `flex flex-row gap-16 mt-auto border-2 ${userActive ? "border-[#9dfaee]" : "border-black"} bg-[#808b5e] rounded-xl p-4`, children: [
          /* @__PURE__ */ jsx(
            UserCards,
            {
              userHand: table.user_hands_state.find((hand) => hand.player_id === "1")?.hand ?? {
                card_moon: "moon_back",
                card_sun: "sun_back"
              },
              refUserSunCardComponent: cardRefs.refUserSunCardComponent,
              refUserMoonCardComponent: cardRefs.refUserMoonCardComponent,
              onClickOnSelectingCard: (card) => {
                setUserView((prev) => ({
                  ...prev,
                  cardChosen: card,
                  chosen: card.includes("sun") ? "hand_sun" : "hand_moon",
                  selectingCard: true
                }));
              }
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex flex-row mt-auto", children: /* @__PURE__ */ jsx(Token, { total: table.user_hands_state.find((u) => u.player_id === "1")?.tokens }) })
        ] }),
        /* @__PURE__ */ jsx(
          PlayerOptions,
          {
            playerTurn: table.current_users_turn_id,
            userStand: () => userStand(table.current_users_turn_id),
            userActive,
            playerLeave: async () => {
              await playerLeave(table.current_users_turn_id);
            },
            isCurrentPlayersTurn: table.current_users_turn_id === "1",
            selectingACard: userView.selectingCard,
            cardSelecting: userView.cardChosen ?? "sun_back",
            onConfirmNewCardSelection: () => {
              if (!userView.cardChosen) {
                alert("No card selected");
                return;
              }
              onConfirmNewCardSelection(
                table.current_users_turn_id,
                userView.from ?? "open_sun",
                userView.chosen ?? "hand_sun"
              );
              setUserView((prev) => ({
                ...prev,
                selectingCard: false,
                cardChosen: null,
                chohsen: null,
                from: null
              }));
              freeCardHideAndOutOfWindowView(cardRefs.freeCardRef);
            }
          }
        )
      ] })
    ] }) }) : /* @__PURE__ */ jsx("div", { className: "flex w-[100vw] h-[100vh] min-h-[100vh] min-w-[100vw] items-center justify-center content-center overflow", children: /* @__PURE__ */ jsx("button", { onClick: startGame, className: "", children: "Start game" }) }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        ref: cardRefs.freeCardRef,
        drag: true,
        className: "absolute",
        style: { display: "none" },
        dragConstraints: { top: 0, left: 0, right: 0, bottom: 0 },
        children: /* @__PURE__ */ jsx(
          Card,
          {
            onClickOnSelectingCard: (card) => {
              setUserView((prev) => ({
                ...prev,
                cardChosen: card,
                from: card.includes("sun") ? "deck_sun" : "deck_moon",
                chosen: card.includes("sun") ? "deck_sun" : "deck_moon",
                selectingCard: true
              }));
            },
            card: userView.from?.includes("sun") ? table?.deck_sun ? table?.deck_sun[table?.deck_sun.length - 1] : "sun_back" : table?.deck_moon ? table?.deck_moon[table?.deck_moon.length - 1] : "moon_back"
          }
        )
      }
    )
  ] });
}
function RouteComponent() {
  return /* @__PURE__ */ jsx(Home, {});
}
export {
  RouteComponent as component
};
