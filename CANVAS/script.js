CanvasRenderingContext2D.prototype.regularpolygon = function (x, y, radius, sides,fill=true,stroke=false) {
    this.beginPath();
    var angulo = ((Math.PI * 2) / sides);
    this.translate(x, y);
    this.moveTo(radius, 0);
    for (var i = 1; i < sides; i++) {
        this.lineTo(radius * Math.cos(angulo * i), radius * Math.sin(angulo * i));
    }
    this.closePath();
    if (fill) {
        this.fill();
    }
    if (stroke) {
        this.stroke();
    }
    this.resetTransform();    
}



CanvasRenderingContext2D.prototype.roundRect = function (sx, sy, dx, dy, r, fill = true, stroke = false) {
    var cornerRadius = { upperLeft: 0, upperRight: 0, lowerLeft: 0, lowerRight: 0 };
    if (typeof r != "object") {
        Object.keys(cornerRadius).forEach(key => {
            cornerRadius[key] = r;
        }
        )
    }
    if (typeof r === "object") {
        Object.keys(cornerRadius).forEach(key => {
            if (r[key] > 0) {
                cornerRadius[key] = r[key];
            }
        }
        )
    }
    this.beginPath();
    this.moveTo(sx + dx - cornerRadius.upperRight, sy);
    this.quadraticCurveTo(sx + dx, sy, sx + dx, sy + cornerRadius.upperRight);
    this.lineTo(sx + dx, sy + dy - cornerRadius.lowerRight);
    this.quadraticCurveTo(sx + dx, sy + dy, sx + dx - cornerRadius.lowerRight, sy + dy);
    this.lineTo(sx + cornerRadius.lowerLeft, sy + dy);
    this.quadraticCurveTo(sx, sy + dy, sx, sy + dy - cornerRadius.lowerLeft);
    this.lineTo(sx, sy + cornerRadius.upperLeft);
    this.quadraticCurveTo(sx, sy, sx + cornerRadius.upperLeft, sy);
    this.lineTo(sx + dx - cornerRadius.upperRight, sy);
    this.closePath();
    if (fill) {
        this.fill();
    }
    if (stroke) {
        this.stroke();
    }
}
window.addEventListener('load', comenzar, false);
function comenzar() {
    var elemento = document.getElementById("lienzo");
    var context = elemento.getContext("2d");
    context.globalAlpha=0.2;
    
    context.strokeStyle='#674172';
    context.regularpolygon(120, 120, 100, 5,true,false);
    context.regularpolygon(250, 250, 100, 5,false,true);

    
    
}

