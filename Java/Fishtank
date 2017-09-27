background(89, 216, 255);


var drawFish = function(centerX, centerY, bodyLength, bodyHeight,tailWidth, eyeSize, bodyColor)
{
    noStroke();
    bodyColor = color(random(1,255), random(1,255), random(1,255));
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    fill(random(1,255), random(1,255), random(1,255));
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight         ,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight    );
    // eye
    fill(random(1,255), random(1, 255), random(1,255));
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5,       bodyHeight/5);
};

drawFish(random(50,300), random(50,300), random(50,200), random(50,200), random(10, 150));
drawFish(random(50,300), random(50,300), random(50,200), random(50,200), random(10, 150));
drawFish(random(50,300), random(50,300), random(50,200), random(50,200), random(10, 150));
drawFish(random(50,300), random(50,300), random(50,200), random(50,200), random(10, 150));
drawFish(random(50,300), random(50,300), random(50,200), random(50,200), random(10, 150));


var drawSeaweed = function()
{
    stroke(0, 0, 0);
    fill(115, 255, 206);
    var radius = random(10, 75);
    var x = random(1, 400);
    var y = random(1, 400);
    
    ellipse(x, y, radius, radius);
};

drawSeaweed();
drawSeaweed();
drawSeaweed();
drawSeaweed();
drawSeaweed();









