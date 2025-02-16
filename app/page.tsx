"use client";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Drum from "./components/Drum";

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6.5em;
  align-items: center;
  padding: 6em 10em;
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 1rem;
  width: 100%;
`;

const sounds = {
  "Crash Cymbal": "crash-symbal.mp3",
  "Snare Drum": "snare-808-drum.mp3",
  "Long Ride Cymbal": "long-cymbal.mp3",
  Tom: "tom.mp3",
  "Hi-Hat": "hi-hat.mp3",
  "Floor Tom": "floor-tom.mp3",
};

export default function Home() {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [slots, setSlots] = useState<{ key: string; sound: string }[]>(
    Array(12).fill({ key: "", sound: "" })
  );

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const slot = slots.find((slot) => slot.key === event.key);
      if (slot && slot.sound) {
        new Audio(`/${slot.sound}`).play();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [slots]);

  const handleAssign = (index: number, key: string, sound: string) => {
    setSlots((prevSlots) => {
      const newSlots = [...prevSlots];
      newSlots[index] = { key, sound: sounds[sound] };
      return newSlots;
    });
  };

  return (
    <StyledMainContainer>
      <Header />
      <StyledContainer>
        {slots.map((slot, i) => (
          <Drum
            key={i}
            index={i}
            onDrumClick={() => setSelectedSlot(i)}
            assignedKey={slot.key}
          />
        ))}
      </StyledContainer>
      {selectedSlot !== null && (
        <Modal
          index={selectedSlot}
          onClose={() => setSelectedSlot(null)}
          onKeyAssign={handleAssign}
        />
      )}
    </StyledMainContainer>
  );
}
