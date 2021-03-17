function readFile(filename){
    return require("fs").readFileSync(filename).toString();
}
df = readFile('day1.txt').split('')


let floor = 0;
for (let [idx, elems] of df.entries()){

    if(floor == -1){
        console.log(idx)
        break;
    }
    if(elems == '('){
        floor += 1;
    }
    else{
        floor -= 1;
    }
}

console.log(floor)