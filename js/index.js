const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = "../images/road.png";
    this.img.onload = () => {
      this.draw();
    };
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

class Car {
  constructor() {
    this.x = canvas.width/2 - 30;
    this.y = canvas.height -120;
    this.width = 60;
    this.height = 100;
    this.img = new Image();
    this.img.src = "../images/car.png";
    this.img.onload = () => {
      this.draw();
    };
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  moveLeft(){
    this.x -= 5;
  }

  moveRigth(){
    this.x += 5;
  }
}

function startGame() {
  new Background()
  new Car()
}

function gameLoop (){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  gameArea.draw();
  Car.draw();
  player.draw();
}

document.addEventListener('keydown', e => {
  switch (e.keyCode) {
      case 37:
          Car.moveLeft()
          return;
      case 39:
          Car.moveRight()
          return;
  }
})