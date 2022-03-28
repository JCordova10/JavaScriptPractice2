// Required by Webpack - do not touch
require.context('../fonts/', true, /\.(eot|ttf|woff|woff2)$/i)
require.context('../images/', true, /\.(png|jpg|jpeg|gif|svg)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

//TODO - Your ES6 JavaScript code (if any) goes here
import 'bootstrap'

function draw(){
    let c = document.querySelector('canvas')
    if(c.getContext){
        let ctx = c.getContext('2d')
       
        // Rectangle
        ctx.clearRect(0, 0, 400, 300)
        ctx.fillStyle = 'blue'
        ctx.fillRect(50, 100, 60, 30)

        // Circle
        ctx.fillStyle ='red'
        ctx.beginPath()
        ctx.arc(document.getElementById('r').value, 150, 75, 0, 2 * Math.PI)
        ctx.fill()
       
        // triangle
        ctx.fillStyle = document.getElementById('c').value
        ctx.beginPath()
        ctx.moveTo(75, 50)
        ctx.lineTo(100, 75)
        ctx.lineTo(100, 25)
        ctx.fill()
        

    }
}

document.body.onload = draw
document.getElementById('r').onchange = draw
document.getElementById('c').onchange = draw