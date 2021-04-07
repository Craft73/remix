var l1
var l2
var words


function preload(){
    l1=loadStrings("poem_c.txt")
    l2=loadStrings("poem.txt")

}

function setup(){
    createCanvas(1600,800);
    textAlign(CENTER);
    text("梦游天姥吟留别",150,50);
    text("李白",150,70);
    // console.log(lines.length);
    for(var i=0; i<l1.length;i++){
        text(l1[i],150,20*i+120);
            
    }
    textAlign(LEFT);
    text("Mount Skyland Ascended in a Dream ——A Song of Farewell",400,50);
    text("Li Bai",400,70);
    for(var i=0; i<l2.length;i++){
        text(l2[i],400,20*i+120);
            
    }
    // console.log(lines);
}