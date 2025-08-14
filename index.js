function setupScrollButton() {
  const scrollButton = document.createElement('button');
  scrollButton.innerHTML = '↓';
  scrollButton.style.cssText = 'position: absolute; right: 10px; bottom: 30px; display: none;';
  document.getElementById('scroll-button').appendChild(scrollButton);

  let lastScrollTop = 0;
  const chatTranscript = document.getElementById('chat-transcript');

  function handleScroll() {
    if (chatTranscript.scrollTop < lastScrollTop) {
      scrollButton.style.display = 'block';
    } else if (chatTranscript.clientHeight + chatTranscript.scrollTop >= chatTranscript.scrollHeight) {
      scrollButton.style.display = 'none';
    }
    lastScrollTop = chatTranscript.scrollTop <= 0 ? 0 : chatTranscript.scrollTop;
  }

  function scrollToBottom() {
    chatTranscript.scrollTop = chatTranscript.scrollHeight;
    scrollButton.style.display = 'none';
  }

  scrollButton.addEventListener('click', scrollToBottom);
  chatTranscript.addEventListener('scroll', handleScroll);
}

function addMessage() {
  const chatTranscipt = document.getElementById("chat-transcript");
  const chatMessage = document.createElement("div");
  const chatMessageInput = document.getElementById("chat-message-input");
  
  chatMessage.textContent = chatMessageInput.value;
  chatMessage.setAttribute("class", "message");
  chatTranscipt.append(chatMessage);
  chatTranscipt.scrollTop = chatTranscipt.scrollHeight;  
}

document.addEventListener('DOMContentLoaded', () => {
    setupScrollButton(); // Set up the scroll button first
    const chatMessageInput = document.getElementById("chat-message-input");
    chatMessageInput.addEventListener("keyup", function(event){
      if(event.code === 'Enter'){
          addMessage();
      }
    });
});