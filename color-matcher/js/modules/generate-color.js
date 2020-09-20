function generateColor() {
    let n1 = Math.floor(Math.random() * 256);
    let n2 = Math.floor(Math.random() * 256);
    let n3 = Math.floor(Math.random() * 256);

    let rgb = `rgb(${n1},${n2},${n3})`;

    return rgb;
}

export { generateColor };