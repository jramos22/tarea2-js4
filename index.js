const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
//Good
let Xorigentext = 200;
let Yorigentext = 200;
let Xspeed = 10;
let Yspeed = 10;
//afternon
let Xorigentext2 = 350;
let Yorigentext2 = 200;
let Xspeed2 = 10;
let Yspeed2 = 10;
function lienzo() {
    ctx.clearRect(0,0, canvas.clientWidth, canvas.height);
    ctx.font = '50px serif';
    ctx.fillText('Good', Xorigentext, Yorigentext);
    ctx.beginPath();
    ctx.font = '50px serif';
    ctx.fillText('Afternoon', Xorigentext2, Yorigentext2);

    //derecha
    if (Xorigentext + 115>= canvas.width) {
        Xspeed = -Xspeed;
        Xorigentext2 = 920;
    }
    // abajo
    if (Yorigentext + 10 >= canvas.height) {
        Yspeed = -Yspeed;
    }

    // izquierda
    if (Xorigentext < 0) {
        Xspeed = -Xspeed;
        Xorigentext2 = 150;
    }

    // arriba
    if (Yorigentext - 50 < 0) {
        Yspeed = -Yspeed;
    }

    //derecha
    if (Xorigentext2 + 115>= canvas.width) {
        Xspeed2 = -Xspeed2;
    }
    // abajo
    if (Yorigentext2 + 10 >= canvas.height) {
        Yspeed2 = -Yspeed2;
    }

    // izquierda
    if (Xorigentext2 < 0) {
        Xspeed2 = -Xspeed2;
    }

    // arriba
    if (Yorigentext2 - 50 < 0) {
        Yspeed2 = -Yspeed2;
    }

    Xorigentext += Xspeed;
    Yorigentext += Yspeed;
    Xorigentext2 += Xspeed2;
    Yorigentext2 += Yspeed2;

    window.requestAnimationFrame(lienzo);
}

window.requestAnimationFrame(lienzo);