var lines
var words
var t=0;
var step=0.05;


function preload(){
    lines=loadStrings("../poem_c.txt")
}

function setup(){
    createCanvas(800,800);
    // background(0);
    // text(lines,100,100);
    // words=split(lines," ");
    colorMode(HSB,100)
    // console.log(lines.length);
    
}
function draw(){
    background(255);
    for(var i=0; i<lines.length;i++){
        // text(lines[i],20,20*i+20);
        words=split(lines[i],"");
        // console.log(words);
        var r= floor(random(0,words.length));
        console.log(words.length);
        // text(words,100,20*i+20);
        var x=0;
        for(var j=0;j<words.length;j++){
            // text(words[j],j*50,20*i+20);
            
            yoff=noise(j*.1+t)*10;
            // fill(noise(j*0.1,i*0.5)*60+40,60,70);
            text(words[j],j*12,20*i+20+yoff);
            
            // x=x+words[j].length*8+8;
                
            
        }
    }
    // console.log(lines);
    t+=step;

}