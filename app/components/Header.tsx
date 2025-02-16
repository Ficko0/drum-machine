import styled from "@emotion/styled";

const HeaderStyled = styled.h1`
  color: white;
  width: 100%;
  font-weight: 400;
`;

export default function Header() {
  return (
    <div>
      <HeaderStyled>Drum Machine</HeaderStyled>
    </div>
  );
}
