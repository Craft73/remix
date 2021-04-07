var lines
var words
var size=16;
var myFont=[];
// const pane = new Tweakpane();
//     const PARAMS = {
//         Fonts: 0,
//       };

function preload(){
    lines=loadStrings("../poem_c.txt");
    myFont[0] = loadFont("../assets/HYCuZhuanF.ttf");
    myFont[1] = loadFont("../assets/HYXiaoLiShuF.ttf");
    myFont[2] = loadFont("../assets/HYKaiTiS.ttf");
    myFont[3] = loadFont("../assets/HYShuSongErS.ttf");
    myFont[4] = loadFont("../assets/HYZhongDengXianS.ttf");
    
}

function setup(){
    createCanvas(800,600); 
    createP('Fonts');
	fonts_slider = createSlider(0, 4, 0);
    
    // PARAMS.Fonts=1;
    // pane.addInput(PARAMS, 'Fonts', {
    //     options: {
    //       Zhuan: 0,
    //       Li: 1,
    //       high: 100,
    //     },
    //   });
    
    
    
}

function draw(){
    
    // pane
    background(255);
    // noLoop();
    
    // console.log(lines.length);
    for(var i=0; i<lines.length;i++){
        words=split(lines[i],"");
        // console.log(words.length);
        // text(words,100,20*i+20);
        var x=0;
        for(var j=0;j<words.length;j++){
            // text(words[j],j*50,20*i+20);
            
    
            
            textSize(size);
            
            var r= floor(noise(i,j)*7%5);
            if (r==fonts_slider.value() ){
                fill(20);
                textFont(myFont[r]);
            }else{fill (255)};
            // console.log(PARAMS.Fonts)
            text(words[j],j*size,size*1.3*i+20);
            
            // x=x+words[j].length*8+8;
                
            
        }
    }
    // console.log(lines);  

}