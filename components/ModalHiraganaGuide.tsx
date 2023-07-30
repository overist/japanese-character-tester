import React, { useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import { Subject } from "@/containers/Home";
import styled from "styled-components";

export default function ModalHiraganaGuide() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Subject onClick={handleOpen}>
        <img src="/images/common/banner-all-hiragana.png" alt="all-hiragana" />
        <span>H-Guide</span>
      </Subject>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            position: "relative", // Add relative positioning to the Box
            bgcolor: "#ffe3e3",
            boxShadow: 24,
            borderRadius: "10px",
            maxHeight: "80vh", // Customize the height of the modal box
            width: "fit-content", // Customize the width of the modal box
          }}
        >
          <CloseButton onClick={handleClose}>X</CloseButton>{" "}
          <Title>All Hiragana Stroke Order</Title>
          <Banner>
            <img
              src="/images/common/banner-all-hiragana.png"
              alt="all-hiragana"
            />
          </Banner>
        </Box>
      </Modal>
    </div>
  );
}

const Title = styled.h1`
  font-size: 24px;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  padding: 20px 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-family: "Noto Sans JP", sans-serif;
  padding: 15px;
`;

const Banner = styled.div`
  width: 100%;
  height: 100%;
  max-width: 90vh;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;
