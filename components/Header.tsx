import { useRouter } from "next/router";
import styled from "styled-components";

export default function Header() {
  const Router = useRouter();

  return (
    <>
      <Frame>
        <Wrap>
          <Item
            className={Router.pathname === "/" ? "active" : ""}
            onClick={() => {
              Router.push("/");
            }}
          >
            Home
          </Item>
          <Item
            className={Router.pathname === "/hiragana" ? "active" : ""}
            onClick={() => {
              Router.push("/hiragana");
            }}
          >
            Hiragana
          </Item>
          <Item
            className={Router.pathname === "/katakana" ? "active" : ""}
            onClick={() => {
              Router.push("/katakana");
            }}
          >
            Katakana
          </Item>
          <Item
            className={Router.pathname === "/kanji" ? "active" : ""}
            onClick={() => {
              Router.push("/kanji");
            }}
          >
            Kanji
          </Item>
        </Wrap>
      </Frame>
    </>
  );
}

const Frame = styled.div`
  background-color: #fa5252;
  width: 100%;
  height: 60px;
  position: fixed;
`;

const Wrap = styled.ul`
  margin: 0 auto;
  max-width: 1200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.li`
  font-family: "Noto Sans JP", sans-serif;
  margin: 0 10px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;

  &.active {
    color: #fff;
    border-bottom: 2px solid #fff;
  }
`;
