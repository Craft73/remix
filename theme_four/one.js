
var lines
var poem
var words
var step

function preload(){
    lines=loadStrings("../poem.txt")
}

function setup(){
    createCanvas(800,800);
    poem=join(lines," ");
    words=split(poem,"");
    console.log(words);
    
}
function draw(){
    background(255,248,233);
    for(var i=0;i<words.length;i++){
        var x = i%50+noise(frameCount/100,i)*3;
        var y = floor(i/50)+noise(frameCount/120,i)*3;
        text(words[i], x*15,y*20+20);
    }
}
