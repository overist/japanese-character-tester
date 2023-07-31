import {
  hGuideModalState,
  isMobileState,
  kGuideModalState,
} from "@/recoil/atoms";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import React from "react";

export default function Header() {
  const Router = useRouter();
  const isMobile = useRecoilValue(isMobileState);
  const setHGuideModalOpen = useSetRecoilState(hGuideModalState);
  const setKGuideModalOpen = useSetRecoilState(kGuideModalState);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderMenuItems = () => {
    return (
      <>
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
        <Item onClick={() => setHGuideModalOpen(true)}>H-Guide</Item>
        <Item onClick={() => setKGuideModalOpen(true)}>K-Guide</Item>
      </>
    );
  };

  return (
    <>
      {/* PC START */}
      {!isMobile && (
        <Frame>
          <Wrap>{renderMenuItems()}</Wrap>
        </Frame>
      )}
      {/* PC END */}

      {/* Mobile START */}
      {isMobile && (
        <Frame>
          <Wrap className={"mobile" + (isMenuOpen ? " open" : "")}>
            <MobileLogo
              onClick={() => {
                Router.push("/");
              }}
            />

            <MobileTitle
              onClick={() => {
                Router.push("/");
              }}
            >
              JA Character Tester
            </MobileTitle>

            <MobileMenuButton
              isMenuOpen={isMenuOpen}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <span />
              <span />
              <span />
            </MobileMenuButton>

            {renderMenuItems()}
          </Wrap>
        </Frame>
      )}
    </>
  );
}

// SECTION styled - common
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
  margin: 0px;

  &.mobile {
    position: relative;
    flex-direction: column;
  }
  &.mobile.open {
    background-color: #fa5252;
    width: 100%;
    height: calc(100vh - 0px);
    z-index: 100;
  }
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

  .mobile & {
    display: none;
  }
  .mobile.open & {
    display: flex;
    font-size: 24px;
    margin: 20px 0;
  }
`;
// !SECTION styled - common END

// SECTION styled - mobile start
const MobileLogo = styled.div`
  display: none;

  .mobile & {
    display: block;
    position: absolute;
    top: 15px;
    left: 15px;
    width: 35px;
    height: 30px;
    background-image: url("/images/common/flag.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
  }
`;

const MobileTitle = styled.div`
  display: none;

  .mobile & {
    display: block;
    position: absolute;
    cursor: pointer;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-family: "Noto Sans JP", sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    white-space: nowrap;
  }
`;

const MobileMenuButton = styled.div<any>`
  display: none;

  .mobile & {
    position: absolute;
    top: 20px;
    right: 15px;
    width: 30px;
    height: 18px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & span {
    display: block;
    width: 28px;
    height: 3px;
    background-color: #fff;
    border-radius: 10px;
    transition: all 0.2s linear;

    &:nth-child(1) {
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? "rotate(45deg) translateY(10px)" : "rotate(0)"};
    }

    &:nth-child(2) {
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ isMenuOpen }) => (isMenuOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? "rotate(-45deg) translateY(-10px)" : "rotate(0)"};
    }
  }
`;

// !SECTION styled - mobile end
