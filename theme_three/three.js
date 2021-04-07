var lines
var poem
var words

function preload(){
    lines=loadStrings("../poem.txt")
}

function setup(){
    createCanvas(1600,900);
    
    var size=[];
    for (var i=0;i<26;i++){
        size[i]=0;
    }
    for(var i=0;i<lines.length;i++){
        // words=split(lines[i],"")
        
        for(var j=0;j<lines[i].length;j++){
            var words = lines[i].charAt(j);
            // console.log(words);
            num=words.charCodeAt();
            if(num>64&&num<91){
                num = num +97 -64;
            }
            if(num>96&&num<122){
                size[num-97]+=1;
            }
            // 
            
            
        }
    }
    var x=0;
    console.log(size);
    for(var i=0;i<26;i++){
        x = x+size[i]/2;
        console.log(x);
        // text(String.fromCharCode(i+96),x,300);
        ellipse(x,100,size[i]);
        
        

        x = x+size[i]/2;
        
    }
}