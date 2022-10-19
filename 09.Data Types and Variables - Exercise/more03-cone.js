function cone(radius, height) {

    let volume = (Math.PI * Math.pow(radius, 2) * height) / 3; //  V = (𝛑r²h)/3.
    let slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2)); // Pythagorean theorem
    let area = (Math.PI * Math.pow(radius, 2)) + (Math.PI * radius * slantHeight); //  SA = 𝛑r² + 𝛑rl.

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

cone(3, 5)
cone(3.3, 7.8)