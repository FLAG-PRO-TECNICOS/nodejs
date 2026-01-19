function rectangleArea(width, height) {
    return width * height;
}

function rectanglePerimeter(width, height) {
    return 2 * (width + height);
}

function circleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

function circleCircumference(radius) {
    return 2 * Math.PI * radius;
}

module.exports = {
    rectangleArea,
    rectanglePerimeter,
    circleArea,
    circleCircumference
}
