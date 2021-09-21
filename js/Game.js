class Game {
  constructor() { }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();
    car1 = createSprite(width / 2 - 100, height - 100);
    car1.addImage(car1_img);
    car1.scale = 0.1;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage(car2_img);
    car2.scale = 0.1;

    cars = [car1, car2]

    form = new Form();
    form.display();
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() {
    this.handleElements();
    Player.getPlayersInfo();


    if (allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6);

      this.handlePlayerControls();

      var index = 0;
      for (var plr in allPlayers) {
        index = index + 1;
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        cars[index - 1].position.x = x;
        cars[index - 1].position.y = y;

        if (index === player.index) {
          stroke(10);
          fill("Green");
          ellipse(x, y, 60, 60);

        }
      }
      drawSprites();
    }

  }

  handlePlayerControls() {
    if (keyIsDown(UP_ARROW)) {
      player.positionY = player.positionY + 10;
      player.update();
    }
  }










}
