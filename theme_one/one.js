var lines
var words


function preload(){
    lines=loadStrings("../poem_c.txt")
}

function setup(){
    createCanvas(800,800);
    // background(0);
    // text(lines,100,100);
    // words=split(lines," ");
    console.log(lines.length);
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
            
    
                fill(random(350));
                text(words[j],j*12,20*i+20);
            
            // x=x+words[j].length*8+8;
                
            
        }
    }
    // console.log(lines);
}