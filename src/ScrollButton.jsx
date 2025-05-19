import { Button } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  function scrollToBottom() {
    const chatTranscipt = document.getElementById("chat-transcript");
    chatTranscipt.scrollTop = chatTranscipt.scrollHeight;
    console.log("setting hidden");
    setIsVisible(false);
  }

  return (
    isVisible && (
      <Button
        onClick={() => {
          scrollToBottom();
          console.log("hi");
        }}
        variant="outlined"
        sx={{
          position: "absolute",
          right: "20px",
          bottom: "20px",
        }}
      >
        <KeyboardArrowDownOutlinedIcon />
      </Button>
    )
  );
}

export default ScrollButton;
