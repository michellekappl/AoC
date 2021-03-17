function readFile(filename) {
    return require("fs").readFileSync(filename).toString();
}
let data = readFile('day2.txt').split('\r\n')

function wrappingpaper(df) {
    let wp = 0
    for (let measurement of df) {

        let [l, w, h] = measurement.split('x');
        let extra = Math.min(l * w, w * h, h * l);
        wp += (2 * w * l + 2 * w * h + 2 * h * l + extra);
    }
    return wp;
}

function ribbon(df) {
    let ribbon = 0
    for (let measurement of df) {

        let [l, w, h] = measurement.split('x');

        let big = Math.max(l, w, h);
        let bow = l * w * h;

        ribbon += (2 * w + 2 * h + 2 * l - 2 * big + bow);
    }
    return ribbon;
}
console.log(ribbon(data));

console.log(wrappingpaper(data));