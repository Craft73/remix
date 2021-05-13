var lines
var poem
var words

function preload(){
    lines=loadStrings("../poem.txt")
}

function setup(){
    createCanvas(900,900);
    
    var size=[];
    for (var i=0;i<26;i++){
        size[i]=0;
    }
    for(var i=0;i<lines.length;i++){
        // words=split(lines[i],"")
        beginShape();
        for(var j=0;j<lines[i].length;j++){
            var words = lines[i].charAt(j);
            console.log(words);
            num=words.charCodeAt();
            if(num>64&&num<91){
                num = num +97 -64;
            }
            if(num>96&&num<122){
                num =map(num,96,122,2,28);
                ellipse(j*5+3,i*35+num,3);
                
                curveVertex(j*5+3,i*35+num)
            }
            // 
        endShape();    
            
        }
    }
    // var x=0;
    // console.log(size);
    // for(var i=0;i<26;i++){
    //     x = x+size[i]/2;
    //     console.log(x);
    //     ellipse(x,100,size[i]);
    //     x = x+size[i]/2;

    // }
}