var lines
var poem
var words
var step=35;

function preload(){
    lines=loadStrings("../poem_c.txt")
}

function setup(){
    createCanvas(600,350);
    poem=join(lines,"");
    words=split(poem,"");
    // console.log(words);

    var z=[];
    
    for (var j=0;j<step;j++){
        z[j] = noise(j*.3)*250+50;
        // rect(j*14,z[j],14,1)
        }

    var x=0;
    var j=0;
    var k=0;
    for(var i=words.length; i>=0;i--){
        // console.log(z[21]);
        var y= height-j*12;
        text(words[i], x*15,y);
        if (y<z[x]+14){
            x=x+1;
            j=0;
            if (z[x]>z[k]){
                k=x;
                console.log(k);
            }
        }
        j++;
    }

    ellipse(k*15,50,20,20);

    for (var j=0;j<step;j++){
        z[j] = noise(j*.3+5)*200+140;
        // rect(j*15,z[j],14,1)
        }
    
    var x=0;
    var j=0;
    for(var i=words.length; i>=0;i--){
        // console.log(z[21]);
        var y= height+50-j*12;
        text(words[i], x*15,y);
        if (y<z[x]+14){
            x=x+1;
            j=0;
        }
        j++;
    }


    for (var j=5;j<step;j++){
        z[j] = noise(j*.3+10)*300+120;
        // rect(j*15,z[j],14,1)
        }
    
    var x=5;
    var j=0;
    for(var i=words.length; i>=0;i--){
        // console.log(z[21]);
        var y= height+80-j*12;
        text(words[i], x*15,y);
        if (y<z[x]+14){
            x=x+1;
            j=0;
        }
        j++;
    }
    
    console.log(words.length)
}
