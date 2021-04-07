
var lines
var poem
var words

function preload(){
    lines=loadStrings("../poem.txt")
}

function setup(){
    createCanvas(900,900);
    poem=join(lines," ");
    words=split(poem," ");
    console.log(words);
    for(var i=0;i<words.length;i++){
        var x = i%13;
        var y = floor(i/12);
        text(words[i], x*65,y*25+20);
    }
}
