import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Fade } from "@mui/material"

function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);
  //const [scrolledToBottom, setScrolledToBottom] = useState(false);
  
  function scrollToBottom() {
    const chatTranscipt = document.getElementById("chat-transcript");
    chatTranscipt.scrollTop = chatTranscipt.scrollHeight;
    console.log("Scrolled to bottom.");
    setIsVisible(false);
  }

  useEffect(() => {
    const chatTranscript = document.getElementById("chat-transcript");
    let lastScrollTop = 0;

    const handleScroll = () => {
      if (chatTranscript.scrollTop < lastScrollTop) {
          console.log("Setting visible true");
          setIsVisible(true);
          console.log("1 " + chatTranscript.scrollTop);
      } else if(chatTranscript.clientHeight + chatTranscript.scrollTop <= chatTranscript.scrollHeight){
          console.log("scroll height: " + chatTranscript.clientHeight);
          console.log("scroll top: " +  chatTranscript.scrollTop);
          console.log("client height: " + chatTranscript.scrollHeight);
          console.log("We're at the bottom.");
          setIsVisible(false);
          console.log("2 " + chatTranscript.scrollTop);
      }
      lastScrollTop = chatTranscript.scrollTop <= 0 ? 0 : chatTranscript.scrollTop;
    };

    chatTranscript.addEventListener('scroll', handleScroll);

    return () => {
      chatTranscript.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fade in={isVisible}>
      <Button
        onClick={() => {
          scrollToBottom();
        }}
        variant="outlined"
        sx={{
          position: "absolute",
          right: "10px",
          bottom: "30px",
        }}
      >
        <KeyboardArrowDownOutlinedIcon />
      </Button>
    </Fade>
  );
}

export default ScrollButton;
