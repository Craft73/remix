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
    var w=0;
    for(var i=0;i<words.length;i++){
        var x = i%13;
        if(x!=0){
            w=w+textWidth(words[i-1])+4;
        }else w=0;
        //     w=0;
        // }else 
        {};
        console.log(w);
        var y = floor(i/13);
        text(words[i], w,y*25+20);
    }
}