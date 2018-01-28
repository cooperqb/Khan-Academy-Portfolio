fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(1, 5));
if (answer === 0) {
    fill(255, 0, 0);
    text("Stop", 176, 200);
    text("Trying 0", 159, 229); 
}

else if (answer === 1) {
    fill(0, 255, 13);
    text("Don't", 176, 200);
    text("do it 1", 159, 229); 
}

else if (answer === 2) {
    fill(255, 196, 0);
    text("It's not", 176, 200);
    text("worth it 2", 159, 229); 
}

else if (answer === 3) {
    fill(255, 106, 0);
    text("Why even", 176, 200);
    text("bother 3", 159, 229); 
}

else {
    fill(145, 0, 255);
    text("Yup", 176, 198);
    text("Yup 4", 159, 229); 
}

 
