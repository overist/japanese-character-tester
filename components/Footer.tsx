import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <Frame>
        <Wrap>Copyrightⓒ2023 all by overist</Wrap>
      </Frame>
    </>
  );
}

const Frame = styled.footer`
  background-color: #fff5f5;
  width: 100%;
  height: 60px;
`;

const Wrap = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-family: "Noto Sans JP", sans-serif;
`;
