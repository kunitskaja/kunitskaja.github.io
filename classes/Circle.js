window.Circle = class Circle extends Ellipse {
    constructor(lineColor, fillColor, center, radPoint) {
        const rad = Point.getDistance(center, radPoint);
        const upperLeftPoint = new Point(center.x - rad, center.y - rad);
        const bottomRightPoint = new Point(center.x + rad, center.y + rad);
        super(lineColor, fillColor, upperLeftPoint, bottomRightPoint);
    }

    getFirstPoint() {
        return this.firstPoint;
    }

    setFirstPoint(point) {
        this.firstPoint = point;
    }

    getSecondPoint() {
        return this.secondPoint;
    }

    setSecondPoint(point) {
        this.secondPoint = point;
    }
}