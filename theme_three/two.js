var lines
var poem
var words

function preload(){
    lines=loadStrings("../poem.txt")
}

function setup(){
    createCanvas(900,900);
    
    var num;
    for(var i=0;i<lines.length;i++){
        // words=split(lines[i],"")
        
        for(var j=0;j<lines[i].length;j++){
            var words = lines[i].charAt(j);
            // console.log(words);
            num=words.charCodeAt()+1;
            // console.log(num);
            words2=String.fromCharCode(num);
            text(words2,j*11,i*14+14)
            // 
            // var w=fromCharCode(num);
            // console.log(w);
        }
    }

    


    // for(var i=0;i<words.length;i++){
    //     var x = i%13;
    //     if(x!=0){
    //         w=w+textWidth(words[i-1])+4;
    //     }else w=0;
    //     //     w=0;
    //     // }else 
    //     {};
    //     console.log(w);
    //     var y = floor(i/13);
    //     text(words[i], w,y*25+20);
    // }
}