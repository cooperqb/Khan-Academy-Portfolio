var xPositions = [200, random(1, 400), random(1, 400), random(1, 400), random(1, 400), random(1, 400), random(1, 400),random(1, 400), random(1, 400), random(1, 400), random(1, 400), random(1, 400), random(1, 400),random(1, 400), random(1, 400), random(1, 400), random(1, 400), random(1, 400), random(1, 400),random(1, 400), random(1, 400), random(1, 400), random(1, 400), random(1, 400), random(1, 400),];

var yPositions = [0, random(1, 400), random(1, 400), random(1, 400), random(1, 400), random(1, 400), random(1, 400), random(1, 400), random(1, 400), random(1, 400), random(1, 400), random(1, 400), random(1, 400),random(1, 400), random(1, 400), random(1, 400), random(1, 400), random(1, 400), random(1, 400),random(1, 400), random(1, 400), random(1, 400), random(1, 400), random(1, 400), random(1, 400),random(1, 400), random(1, 400), random(1, 400), random(1, 400), random(1, 400), random(1, 400),];

draw = function() {
    background(204, 247, 255);

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(yPositions[i], 0, 250);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
        
        if(yPositions[i] > 400)
        {
          yPositions[i]=0;
        }  
    }
    
};
