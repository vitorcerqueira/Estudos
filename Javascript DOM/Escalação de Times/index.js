document.addEventListener("DOMContentLoaded", function () {
  const addPlayerButton = document.getElementById("addPlayer");
  const removePlayerButton = document.getElementById("removePlayer");
  const playersList = document.getElementById("players");

  addPlayerButton.addEventListener("click", function () {
    const position = document.getElementById("position").value;
    const playerName = document.getElementById("playerName").value;
    const jerseyNumber = document.getElementById("jerseyNumber").value;

    if (position && playerName && jerseyNumber) {
      const playerItem = document.createElement("li");
      playerItem.innerHTML = `${position} - ${playerName} (#${jerseyNumber})`;
      playersList.appendChild(playerItem);

      document.getElementById("position").value = "";
      document.getElementById("playerName").value = "";
      document.getElementById("jerseyNumber").value = "";
    }
  });

  removePlayerButton.addEventListener("click", function () {
    const removeJerseyNumber =
      document.getElementById("removeJerseyNumber").value;
    const playerItems = playersList.getElementsByTagName("li");

    for (const playerItem of playerItems) {
      const playerText = playerItem.innerText;
      if (playerText.includes(`#${removeJerseyNumber}`)) {
        playerItem.remove();
        break;
      }
    }

    document.getElementById("removeJerseyNumber").value = "";
  });
});
