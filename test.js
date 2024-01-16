const axios = require("axios");

axios
  .get("http://localhost:3001/game/win-pastries/3")
  .then((response) => {
    console.log("Réponse du serveur :", response.data);
  })
  .catch((error) => {
    console.error("Erreur lors de la requête :", error);
  });
