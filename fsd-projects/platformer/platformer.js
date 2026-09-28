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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(300,650,200,20,"teal")
createPlatform(700,600,200,20,"darkgreen")
createPlatform(1100,500,200,20,"darkblue")
createPlatform(700,400,200,20,"lime")
createPlatform(400,300,200,20,"blue")
createPlatform(100,200,200,20,"gold")




    // TODO 3 - Create Collectables
    createCollectable("database",400,500,1,1)
    createCollectable("database",1200,300,1,1)
    createCollectable("database",200,50,1,1)



    
    // TODO 4 - Create Cannons
    createCannon("top",200,500)
     createCannon("right",200,2000)
      createCannon("right",400,2000)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
