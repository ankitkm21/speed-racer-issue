class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY
    });
  }

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    
    database.ref("/").update({
      playerCount: count
    });
  }

  static getPlayersInfo() {
    var playerInfoRef = database.ref("players");

    playerInfoRef.on("value", data => {
      allPlayers = data.val();
    });


  }


  update() {
    console.log(player)
    var playerIndex = "players/player" + this.index;
    console.log(playerIndex)
    var playerCountRef = database.ref("/");
    playerCountRef.on("value", data => {
      console.log(data.val())
    });
    database.ref(playerIndex).update({
      positionX: this.positionX,
      positionY: this.positionY


    });
  }

  getDistance() {
    var playerDistanceRef = database.ref("players/player" + this.index);
    playerDistanceRef.on("value", data => {
      this.positionX = data.positionX;
      this.positionY = data.positionY;
    });
  }

}
