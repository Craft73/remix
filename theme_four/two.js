var lines
var words
var x=[];
var step=.1;
var t=0;
var xoff=[];
var yoff=[];
for(var i=0;i<25;i++){
    xoff[i]=0;
    yoff[i]=0;
}


function preload(){
    lines=loadStrings("../poem_c.txt")
}

function setup(){
    createCanvas(400,400);


}

function draw(){
    background(255);
    for(var i=0; i<lines.length;i++){
        // text(lines[i],20,20*i+20);
        words=split(lines[i],"，");
        // console.log(words);
        // console.log(words.length);
        // text(words,100,20*i+20);
        var x=noise(i)*300+150;
        // xoff=x;
        var y=noise(i+20)*300;
        var size=noise(i*.5+10)
        textSize(size*15+10);
        for(var j=0;j<words.length;j++){
        if(j==1){
            xoff[i]-=noise(t*0.01)*size*5;
            if (x+xoff[i]<0){
                xoff[i]=-x+400;
                t=0;
            }
            // textsize(noise(i)*20);
            text(words[j],xoff[i]+x-20,y); 
        }else{
            yoff[i]+=noise(t*0.01)*size*5;
            if (y+yoff[i]>400){
                yoff[i]=-y;
                t=0;
            }
            // rotate(radians(90));
            for(var k=0;k<words[j].length;k++){
            var w= split(words[j],"");
            text(w[k],x,yoff[i]+y+k*(size*15+10))};
        }
        
        fill(noise(j*0.1,i*0.5)*60+40,60,70);
        
            
        }
        
    }
    t+=step
    

}