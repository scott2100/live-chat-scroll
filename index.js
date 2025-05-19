function addMessage() {
  const chatTranscipt = document.getElementById("chat-transcript");
  const chatMessage = document.createElement("div");
  const chatMessageInput = document.getElementById("chat-message-input");
  chatMessage.textContent = chatMessageInput.value;
  chatMessage.setAttribute("class", "message");

  chatTranscipt.append(chatMessage);
}

document.addEventListener('DOMContentLoaded', () => {
    const chatMessageInput = document.getElementById("chat-message-input");
    chatMessageInput.addEventListener("keyup", function(event){
    if(event.code === 'Enter'){
        addMessage();
    }
  })
});