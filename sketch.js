function setup() {
    createCanvas(400, 420);
  }
  
  let xJogador1 = 0;
  let xJogador2 = 0;
  let xJogador3 = 0;
  let xJogador4 = 0;
  
  function draw() {
    ativaJogo();
    desenhaJogadores();
    desenhaLinhaDeChegada();
    verificaVencedor();
  }
  
  function ativaJogo() {
    if (focused == true) {
      background("#9C27B0");
    } else {
      background("#3F51B5");
    }
  }
  
  function desenhaJogadores() {
    textSize(40);
    text("👻", xJogador1, 100);
    text("❤️", xJogador2, 200);
    text("🎃", xJogador3, 300);
    text("🖤", xJogador4, 400);
    
  }
  
  function desenhaLinhaDeChegada() {
    rect(350, 0, 10, 500);
  }
  
  function verificaVencedor() {
    if (xJogador1 > 350) {
      text("ghost win!", 30, 100);
      noLoop();
    }
    if (xJogador2 > 350) {
      text("red heart win!", 30, 100);
      noLoop();
    }
     if (xJogador3 > 350) {
      text("pumpkin venceu!", 30, 100);
      noLoop();
  }
    if (xJogador4 > 350) {
      text("dark heart win!", 30, 100);
      noLoop();
    }
  }
   function keyReleased() {
    if (key == "a") {
      xJogador1 += random(20);
    }
    if (key == "s") {
      xJogador2 += random(20);
    }
    if (key == "w") {
      xJogador3 += random(20);
    }
    if (key == "d") {
      xJogador4 += random(20);
    }
   }