function triangleArea(a, b, c) {

    // half of the triangles perimeter:
    let s = (a + b + c) / 2;
    // Heron's Formula can calculate the area of a triangle if you know the lengths of all three sides:
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    console.log(area);

}

triangleArea(2, 3.5, 4)
triangleArea(3, 5.5, 4)