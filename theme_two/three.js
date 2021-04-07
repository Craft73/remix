var lines
var words
var size1
var size2
var size


function preload(){
    lines=loadStrings("../poem_c.txt")
}

function setup(){
    createCanvas(400,400);

    console.log(lines.length);
    for(var i=0; i<lines.length;i++){
        // text(lines[i],20,20*i+20);
        words=split(lines[i],"");
        console.log(words);
        var r= floor(random(0,words.length));
        console.log(words.length);
        // text(words,100,20*i+20);
        var x=0;
        for(var j=0;j<words.length;j++){
         
        var x =random(-100,100)+random(-100,100);
        var y=random(-100,100)+random(-100,100);
        if(x<0){ x=380+x}
        if(y<20){y=380+y}
        // rotate(random(-30,30));
        let size1 = abs(x-200);
        let size2 = abs(y-200);
        if(size1>size2){
            size=map(size1,0,200,10,24);
        }else{
            size=map(size2,0,200,10,24);
        }
        fill(size*3);
        textSize(size);
        text(words[j],x,y);     
            
        }
    }
    // line(0,180,400,180);
    // line(180,180,100,400);
    // line(220,180,300,400)
    // console.log(lines);
}