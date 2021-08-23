let canvas = document.querySelector("canvas");
let ctx = canvas.getContext('2d');


canvas.width = 800;
canvas.height = 600;

class Box {
    constructor(x, y, w, h, color){
        this.x = x,
        this.y = y,
        this.w = w,
        this.h = h,
        this.color = color
    }
   draw = function() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.w, this.h, this.color)
}}
//Skapar objekt till spelet
player1 = new Box(10, 550, 50, 50, 'red')


//Skapar spelets loop
setInterval(gameLoop, 1)

function gameLoop(){
    player1.draw();
    
}
console.log(player1)


