"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModalContent = styled.div`
  width: 21em;
  height: 20em;
  background: #000;
  padding: 2.75em 3em;
  border-radius: 1em;
  text-align: center;
  position: relative;
`;

const StyledModalLabel = styled.p`
  color: white;
  font-size: 1.4em;
  width: 100%;
  text-align: start;
  margin: 0;
`;

const StyledModalDropdown = styled.select`
  background-color: #ffffff1a;
  color: white;
  width: 100%;
  padding: 0.5em 1.6em;
  font-size: 1.16em;
  border: none;
  border-radius: 2em;
  appearance: none;
  padding-right: 2.5em;
  position: relative;

  background-image: url("/arrow.png");
  background-position: right 1em center;
  background-repeat: no-repeat;
  background-size: 0.7em;
`;

const StyledModalInput = styled.input`
  background-color: #ffffff1a;
  color: white;
  padding: 0.5em;
  padding-left: 1.6em;
  font-size: 1.16em;
  border: none;
  border-radius: 2em;
`;

const StyledModalMainContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;s
  width:100%;
  height: 100%;
`;

const StyledModalGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const StyledModalButton = styled.button`
  width: 100%;
  font-size: 1.2em;
  padding: 0.5em 0;
  border-radius: 2em;
  text-transform: uppercase;
  font-weight: 900;
  background-color: #0085ff;
  color: white;
  border: none;
`;

const StyledModalOption = styled.option`
  background-color: #000;
  color: white;
  font-size: 1.16em;
  border: none;
`;

const StyledCloseButton = styled.button`
  position: absolute;
  top: 0.01em;
  right: 0.01em;
  width: 2.5em;
  height: 2.5em;
  background-color: white;
  color: black;
  font-size: 1.5em;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0;
  z-index: 1;
`;

const sounds = {
  "Crash Cymbal": "/crash-symbal.mp3",
  "Snare Drum": "/snare-808-drum.mp3",
  "Long Ride Cymbal": "/long-cymbal.mp3",
  Tom: "/tom.mp3",
  "Hi-Hat": "/hi-hat.mp3",
  "Floor Tom": "/floor-tom.mp3",
};

type ModalProps = {
  index: number;
  onClose: () => void;
  onKeyAssign: (index: number, key: string, sound: string) => void;
};

export default function Modal({ index, onClose, onKeyAssign }: ModalProps) {
  const [key, setKey] = useState("");
  const [sound, setSound] = useState("");

  function handleModalSubmit() {
    if (key && sound) {
      onKeyAssign(index, key, sound);
      onClose();
    }
  }

  return (
    <StyledModalOverlay>
      <StyledModalContent>
        <StyledCloseButton onClick={onClose}>
          <Image
            src={"/close.png"}
            width={10}
            height={10}
            alt="Close Button Image"
          />
        </StyledCloseButton>
        <StyledModalMainContainer>
          <StyledModalGroup>
            <StyledModalLabel>Drum Sample</StyledModalLabel>
            <StyledModalDropdown
              value=""
              onChange={(e) => setSound(e.target.value)}
            >
              <StyledModalOption>Select Sound</StyledModalOption>
              {Object.keys(sounds).map((soundName) => (
                <StyledModalOption key={soundName} value={soundName}>
                  {soundName}
                </StyledModalOption>
              ))}
            </StyledModalDropdown>
          </StyledModalGroup>
          <StyledModalGroup>
            <StyledModalLabel>Keyboard Shortcut</StyledModalLabel>
            <StyledModalInput
              type="text"
              placeholder="Enter a key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              maxLength={1}
            />
          </StyledModalGroup>
          <StyledModalButton onClick={handleModalSubmit}>
            Save
          </StyledModalButton>
        </StyledModalMainContainer>
      </StyledModalContent>
    </StyledModalOverlay>
  );
}
