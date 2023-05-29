const columnas = document.querySelectorAll('.columna');

columnas.forEach(columna => {
  columna.addEventListener('click', () => {
    columna.classList.toggle('no-bold');
  });
});

function mostrarChat(chatId) {
    var chats = document.getElementsByClassName("chat-activo");
  for (var i = 0; i < chats.length; i++) {
    chats[i].style.display = "none";
  }

  var chat = document.getElementById(chatId);
  chat.style.display = "block";
}

