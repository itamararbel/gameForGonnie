var i = 0;
var botom = 1;
var lft = 50;
var xGrid = 0;
var yGrid = 0;

function ship(event) {
  const ship = document.getElementById("myShip");
  ship.style.position = "absolute";
  var x = event.key;
  if (x == "ArrowUp") {
    botom += 1.5;
    document.getElementById("myShip").style.transform = "rotate(0deg)";
  }
  if (x == "ArrowDown") {
    botom -= 1.5;
    document.getElementById("myShip").style.transform = "rotate(180deg)";
  }
  if (x == "ArrowLeft") {
    lft -= 1.5;
    document.getElementById("myShip").style.transform = "rotate(270deg)";
  }
  if (x == "ArrowRight") {
    lft += 1.5;
    document.getElementById("myShip").style.transform = "rotate(90deg)";
  }
  ship.style.bottom = botom + "%";
  ship.style.left = lft + "%";
  // console.log(botom + " " + lft + " " + yGrid + " " + xGrid);
  if (checkCollision(botom, lft, yGrid, xGrid)) {
    i += 1;
    xGrid = Math.random() * 100;
    yGrid = Math.random() * 100;
    var pickUp = document.getElementById("icon").style;
    pickUp.bottom = yGrid + "%";
    pickUp.left = xGrid + "%";
  }
}

function astro() {
  var astroLft = 5;
  var astroBotom = 94;
  var Xdir = 1;
  var Ydir = -1;
  const astro = document.getElementById("myAstro").style;
  var dir = Math.random();
  var myInterval = setInterval(() => {
    astroLft += dir * Xdir*0.3;
    astroBotom += Ydir * (1 - dir);
    astro.bottom = astroBotom + "%";
    astro.left = astroLft + "%";
    if (ifOffBounderies(astroLft)) {
      astroLft<0 ? astroLft=0 : astroLft=95;

      Xdir = Xdir * -1;
      dir = Math.random();
      
    }
    if (ifOffBounderies(astroBotom)) {
      astroBotom<0 ? astroBotom=0 : astroBotom=95;

      Ydir = Ydir * -1;
      dir = Math.random();
    }

    if (checkCollision(botom, lft, astroBotom, astroLft)) {
      clearInterval(myInterval);
      clearInterval(myInterval2);
      alert(i);

    }
  }, 30);

  var astroLft2 = 5;
  var astroBotom2 = 95;
  var Xdir2 = 1;
  var Ydir2 = -1;
  const astro2 = document.getElementById("myAstro2").style;
  var dir2 = Math.random();

  var myInterval2 = setInterval(() => {
    astroLft2 += dir2 * Xdir2 *0.3;
    astroBotom2 += Ydir2 * (1 - dir2);
    astro2.bottom = astroBotom2 + "%";
    astro2.left = astroLft2 + "%";

    if (ifOffBounderies(astroLft2)) {
      astroLft2<0 ? astroLft2=0 : astroLft2=95;
      Xdir2 = Xdir2 * -1;
      dir2 = Math.random();
    }
    if (ifOffBounderies(astroBotom2)) {
      astroBotom2<0 ? astroBotom2=0 : astroBotom2=95;
      Ydir2 = Ydir2 * -1;
      dir2 = Math.random();
    }

    if (checkCollision(botom, lft, astroBotom2, astroLft2)) {
      clearInterval(myInterval);
      clearInterval(myInterval2);
      alert(i);

    }
  }, 30);
}

function checkCollision(botom, lft, astroBotom, astroLft) {
  var checkX = Math.abs(botom + 3 - (astroBotom + 5));
  var checkY = Math.abs(lft + 3 - (astroLft + 5));
  if (checkX < 5 && checkY < 5) {
    return true;
  }
}

function ifOffBounderies(astro) {
  if (astro >= 95) {
    astro =95;
    console.log(astro);
    return true;
  }
  if (astro <=0) {
    astro =0;
    return true;
  }
  
  return false;
}

function pickUp() {
  xGrid = Math.random() * 100;
  yGrid = Math.random() * 100;
  var pickUp = document.getElementById("icon").style;
  pickUp.bottom = yGrid + "%";
  pickUp.left = xGrid + "%";
    
}
