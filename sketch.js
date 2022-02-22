   var redrose,redroseImg;
   
   function preload(){
      redrose=loadImage("redroseImg");
   
   }



   function setup() {
   createCanvas(900,900);
   redrose= cratesprite(100,100,100,100);
   redrose.addImage(redrose);
   }

   function draw() {
   
  
   drawSprites();
   
   }   