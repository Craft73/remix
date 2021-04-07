var lines
var words


function preload(){
    lines=loadStrings("../poem.txt")
}
function setup(){
    createCanvas(800,800);
}

function draw() {
    noLoop();
    background(20);
    colorMode(HSB,12);
    img = createImage(22, 22);
    img.loadPixels();

    for(var i=0; i<lines.length;i++){
        words=split(lines[i]," ");
        for(var j=0;j<words.length;j++){
            var c = color(words[j].length,9,12);
            img.set(j,i,c);
        }
    }
    console.log(words);

    img.updatePixels();

    noSmooth();
    image(img, 0, 0, width, height);
}