import styled from "@emotion/styled";
import Image from "next/image";

const StyledDrum = styled.div<{ assigned: boolean }>`
  background-color: ${({ assigned }) => (assigned ? "#1C1C1C" : "#2B2B2B")};
  border: 1px solid ${({ assigned }) => (assigned ? "#FFFFFF99" : "#ffffff33")};
  border-radius: 1em;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: ${({ assigned }) => (assigned ? "start" : "center")};
  align-items: ${({ assigned }) => (assigned ? "start" : "center")};
  font-size: 2em;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  padding: ${({ assigned }) => (assigned ? "1em" : "0")};
`;

type DrumProps = {
  index: number;
  onDrumClick: () => void;
  assignedKey: string;
};

export default function Drum({ onDrumClick, assignedKey }: DrumProps) {
  return (
    <StyledDrum assigned={!assignedKey} onClick={onDrumClick}>
      {assignedKey ? (
        assignedKey
      ) : (
        <Image src={"/plus_icon.png"} width={20} height={20} alt="Plus Icon" />
      )}
    </StyledDrum>
  );
}
