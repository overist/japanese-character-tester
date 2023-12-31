import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { ReactNode } from "react";
import styled from "styled-components";
import useResize from "@/hooks/useResize";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useResize();
  return (
    <>
      <Header />
      <Frame>
        <Wrap>{children}</Wrap>
      </Frame>
      <Footer />
    </>
  );
};

export default Layout;

const Frame = styled.main`
  background-color: #fff5f5;
  width: 100%;
  padding-top: 60px;
  min-height: calc(100vh - 60px);

  @media screen and (max-width: 767px) {
    padding-top: 0;
  }
`;

const Wrap = styled.div`
  max-width: 1200px;
  padding: 60px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
