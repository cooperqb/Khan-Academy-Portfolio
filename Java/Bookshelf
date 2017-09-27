var book = [
    { title: "The Giver", stars: 4, author: "Louis Lowry"},
    
    { title: "Communist Manifesto", stars: 5, author: "Karl Marx"}
];

// draw shelf
fill(173, 117, 33);
rect(0, 120, width, 10);

for (var x = 0; x < book.length; x++)
{
    fill(214, 255, 219);
    rect(x*100, 20, 90, 100);
    fill(0, 0, 0);
    text(book[x].title, 11 + x * 100, 29, 70, 100);
    text(book[x].author, 11 + x * 100, 77, 70, 100);
        for (var i = 0; i < book[x].stars; i++) {
            image(getImage("cute/Star"), 3 + i * 18 + x * 96, 90, 20, 30);
        }
}
