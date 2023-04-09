var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Recttangle = /** @class */ (function () {
    function Recttangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Recttangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Recttangle;
}());
var shapes = [new Circle(5), new Recttangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
