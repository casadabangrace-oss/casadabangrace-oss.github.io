$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
//createPlatform(x, y, width, height, color, minX, MaxX, speed)
createPlatform(400, 625, 200, 10, "red")
createPlatform(700, 500, 200, 10, "orange", 700, 800, 1)
createPlatform(1000, 400, 200, 10, "yellow")
createPlatform(820, 300, 150, 10, "green", 820, 920, 2)
createPlatform (500, 200, 200, 10, "blue")
createPlatform(200, 300, 200, 10, "purple", 200, 300, 3)



    // TODO 3 - Create Collectables
    //createCollectable("type", xPos, yPos, gravityNum, bounceNum Between 0 and 1)
    //type can be any of these. In "". database diamond grace kennedi max steve
    createCollectable("database", 800, 300, 1, 1)
    createCollectable("database", 600, 100, 1, 1)
    createCollectable("database", 300, 100, 1, 1)
    createCollectable("database", 1100, 100, 1, 1)



    
    // TODO 4 - Create Cannons
    //createCannon(wallLocation, position, timeBetweenShots, width, height)
    createCannon("top", 300, 3000)
    createCannon("bottom", 800, 3000)
    createCannon("left", 400, 3000)
    createCannon("right", 200, 3000)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
