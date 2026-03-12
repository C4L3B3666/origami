const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<40;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*1.5,
vx:(Math.random()-0.5)*0.2,
vy:(Math.random()-0.5)*0.2
})
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
p.x+=p.vx
p.y+=p.vy

ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
ctx.fillStyle="rgba(92,200,255,0.4)"
ctx.fill()
})

requestAnimationFrame(animate)
}

animate()


const neural = document.getElementById("neuralNet")
const nctx = neural.getContext("2d")

neural.width = window.innerWidth
neural.height = window.innerHeight

let nodes = []

for(let i=0;i<50;i++){
nodes.push({
x:Math.random()*neural.width,
y:Math.random()*neural.height,
vx:(Math.random()-0.5)*0.3,
vy:(Math.random()-0.5)*0.3
})
}

function neuralAnim(){

nctx.clearRect(0,0,neural.width,neural.height)

nodes.forEach(a=>{

a.x+=a.vx
a.y+=a.vy

nctx.beginPath()
nctx.arc(a.x,a.y,1.5,0,Math.PI*2)
nctx.fillStyle="rgba(92,200,255,0.6)"
nctx.fill()

nodes.forEach(b=>{

let dx=a.x-b.x
let dy=a.y-b.y
let dist=Math.sqrt(dx*dx+dy*dy)

if(dist<120){

nctx.beginPath()
nctx.moveTo(a.x,a.y)
nctx.lineTo(b.x,b.y)
nctx.strokeStyle="rgba(92,200,255,"+(1-dist/120)+")"
nctx.lineWidth=0.3
nctx.stroke()

}

})

})

requestAnimationFrame(neuralAnim)

}

neuralAnim()

document.querySelector("#menuHamburguer").addEventListener("click",()=> {
    document.querySelector("#menu").classList.toggle("active")
})