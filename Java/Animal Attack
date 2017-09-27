var bodyX = 200;
var bodyY = 220;
var bodyW = 118;
var bodyH = bodyW/2;
var moveX = -133;
var moveY = -104;

draw = function() {
    background(207, 254, 255);
    fill(mouseY, mouseY, mouseY);
    ellipse(bodyX, bodyY, bodyW, 106); // body?
    ellipse(bodyX, bodyY-70, bodyH, 47); // face?
    
    //something
    fill(255, 0, 0);
    ellipse(bodyX, bodyY, bodyW-207, bodyW-62);
    fill(56, 31, 31);
    ellipse(bodyX, bodyY, bodyW-133, bodyW-104);
    

    
    //eyes
    fill(mouseX, mouseX, mouseX);
    ellipse(bodyX -16, bodyY-74, bodyW-139, bodyW-103);
    ellipse(bodyX +16, bodyY-74, bodyW-139, bodyW-103);
    fill(56, 31, 31);
    ellipse(bodyX, bodyY, bodyW-133, bodyW-104);
    
    //?
    fill(255, 0, 0);
    ellipse(bodyX, bodyY-58, bodyW-144, bodyW-109);
    fill(255, 0, 0);
    ellipse(bodyX, bodyY, bodyW-207, bodyW-62);
    
    fill(0, 0, 0);
    moveX +=0.02;
    moveY +=0.02;
    ellipse(bodyX, bodyY, bodyW + moveX, bodyW + moveY);
};
